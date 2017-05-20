package com.sj

import io.netty.channel.ChannelHandlerContext
import io.netty.handler.codec.http.HttpObject
import io.netty.handler.codec.http.HttpRequest
import io.netty.handler.codec.http.HttpResponse
import org.littleshoot.proxy.HttpFilters
import org.littleshoot.proxy.HttpFiltersAdapter
import org.littleshoot.proxy.HttpFiltersSourceAdapter
import org.littleshoot.proxy.impl.DefaultHttpProxyServer

fun main(args: Array<String>) {

  val server = DefaultHttpProxyServer.bootstrap()
      .withPort(8001)
      .withAllowLocalOnly(true)
      .withTransparent(true)
      .withFiltersSource(getFiltersSource())
      .withName("UnikernelProxy")
      .start()

  Runtime.getRuntime().addShutdownHook(object : Thread() {
    override fun run() {
      System.out.println("Shutting down proxy.")
      server.stop()
    }
  })
}

private fun getFiltersSource(): HttpFiltersSourceAdapter {
  return object : HttpFiltersSourceAdapter() {
    override fun filterRequest(originalRequest: HttpRequest?, ctx: ChannelHandlerContext?): HttpFilters {
      return object : HttpFiltersAdapter(originalRequest) {
        override fun clientToProxyRequest(httpObject: HttpObject?): HttpResponse? {
          if (httpObject is HttpRequest) {
            if (httpObject.uri.startsWith("/api")) {
              updateRoute("/api/", "192.168.56.103:8080", httpObject)
            } else {
              updateRoute("/", "192.168.56.102:8081", httpObject)
            }
          }
          return null
        }

        override fun proxyToClientResponse(httpObject: HttpObject?): HttpObject? {
          if (httpObject is HttpResponse) {
            // Change the headers back to my domain uri.
            httpObject.headers().remove("Host")
            httpObject.headers().add("Host", "localhost:8001")
          }
          return httpObject
        }
      }
    }
  }
}

private fun updateRoute(routePrefix: String, hostAndPort: String, request: HttpRequest) {
  System.out.println(String.format("Routing to %s: %s %s", hostAndPort, request.method, request.uri))

  // Change the URI to the destination uri.
  request.uri = request.uri.replaceFirst(routePrefix, String.format("http://%s/", hostAndPort))

  // Change the headers to the destination uri.
  request.headers().remove("Host")
  request.headers().add("Host", hostAndPort)
}
