package com.sj

class Route {
  var routePrefix: String
  var downstream: String

  constructor() {
    this.routePrefix = ""
    this.downstream = ""
  }

  override fun toString(): String {
    return "Route(routePrefix='$routePrefix', downstream='$downstream')"
  }
}