package com.sj

import io.netty.channel.ChannelHandlerContext
import io.netty.handler.codec.http.HttpObject
import io.netty.handler.codec.http.HttpRequest
import io.netty.handler.codec.http.HttpResponse
import org.littleshoot.proxy.HttpFilters
import org.littleshoot.proxy.HttpFiltersAdapter
import org.littleshoot.proxy.HttpFiltersSourceAdapter
import org.littleshoot.proxy.impl.DefaultHttpProxyServer

open class ProxyApplication

fun main(args: Array<String>) {

  val config = Config()
  System.out.println("Config: ${config}")

  val server = DefaultHttpProxyServer.bootstrap()
      .withPort(8001)
      .withAllowLocalOnly(true)
      .withTransparent(true)
      .withFiltersSource(getFiltersSource(config.routes()))
      .withName("proxy")
      .start()

  Runtime.getRuntime().addShutdownHook(
      Thread {
        server.stop()
      }
  )
}

private fun getFiltersSource(routes: List<Route>): HttpFiltersSourceAdapter {
  return object : HttpFiltersSourceAdapter() {
    override fun filterRequest(originalRequest: HttpRequest?, ctx: ChannelHandlerContext?): HttpFilters {
      return object : HttpFiltersAdapter(originalRequest) {
        override fun clientToProxyRequest(httpObject: HttpObject?): HttpResponse? {
          if (httpObject is HttpRequest) {
            val first = routes.first { route -> httpObject.uri.startsWith(route.routePrefix) }
            updateRoute(first.routePrefix, first.downstream, httpObject)
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

private fun updateRoute(routePrefix: String, upstream: String, request: HttpRequest) {
  System.out.println("${request.method} ${request.uri} : Routing to ${upstream}")

  // Change the URI to the destination uri.
  request.uri = request.uri.replaceFirst(routePrefix, "http://${upstream}/")

  // Change the headers to the destination uri.
  request.headers().remove("Host")
  request.headers().add("Host", upstream)
}



