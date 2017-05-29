package com.sj

class Config {

  var routes: List<Route>

  init {
    val env = System.getenv("APP_ENV")

    when (env) {
      "vbox" -> this.routes = listOf(
          Route("/api/", "192.168.56.112:8080"),
          Route("/", "192.168.56.113:8081")
      )
      else -> this.routes = listOf(
          Route("/api/", "localhost:8080"),
          Route("/", "localhost:8081")
      )
    }
  }

  fun routes(): List<Route> {
    return this.routes
  }

  override fun toString(): String {
    return "${routes}"
  }
}
