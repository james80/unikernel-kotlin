package com.sj

import com.google.gson.Gson
import spark.Spark

fun main(args: Array<String>) {

  val gson = Gson()
  val companiesService = CompanyService()

  Spark.port(8080)

  Spark.get(
      "/companies",
      { _, _ -> companiesService.getCompanies() },
      gson::toJson
  )

  Spark.post(
      "/company",
      { req, _ -> companiesService.addCompany(gson.fromJson(req.body(), Company::class.java)) },
      gson::toJson
  )

  Spark.delete(
      "/company/:id",
      { req, _ -> companiesService.deleteCompany(req.params(":id").toLong()) }
  )

  Runtime.getRuntime().addShutdownHook(Thread { Spark.stop() })
}
