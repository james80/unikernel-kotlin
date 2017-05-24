package com.sj

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component

interface Routes {
  fun routes(): Array<Route>
}

@Component
@ConfigurationProperties
open class RoutesImpl : Routes {
  var routes: Array<Route>

  constructor() {
    this.routes = arrayOf<Route>()
  }


  override fun routes(): Array<Route> {
    return this.routes
  }
}
