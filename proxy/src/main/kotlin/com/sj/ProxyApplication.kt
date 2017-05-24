package com.sj

import io.netty.channel.ChannelHandlerContext
import io.netty.handler.codec.http.HttpObject
import io.netty.handler.codec.http.HttpRequest
import io.netty.handler.codec.http.HttpResponse
import org.littleshoot.proxy.HttpFilters
import org.littleshoot.proxy.HttpFiltersAdapter
import org.littleshoot.proxy.HttpFiltersSourceAdapter
import org.littleshoot.proxy.impl.DefaultHttpProxyServer
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
open class ProxyApplication(var routes: Routes) {

  @Bean
  open fun init() = CommandLineRunner {

    System.out.println("Routes: ${routes}")
    
    val server = DefaultHttpProxyServer.bootstrap()
        .withPort(8001)
        .withAllowLocalOnly(true)
        .withTransparent(true)
        .withFiltersSource(getFiltersSource())
        .withName("proxy")
        .start()

    Runtime.getRuntime().addShutdownHook(object : Thread() {
      override fun run() {
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
              val first = routes.routes().first { route -> httpObject.uri.startsWith(route.routePrefix) }
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
}

fun main(args: Array<String>) {
  SpringApplication.run(ProxyApplication::class.java, *args)
}


