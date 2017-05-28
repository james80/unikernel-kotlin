package com.sj

import org.rapidoid.data.JSON
import org.rapidoid.http.Req
import org.rapidoid.setup.On

class ApiApplication

fun main(args: Array<String>) {

  val companiesService = CompanyService()

  On.port(8080)

  On.get("/companies").json { -> companiesService.getCompanies() }

  On.post("/company").json { req: Req ->
    val company = JSON.parse(req.body(), Company::class.java)
    companiesService.addCompany(company)
  }

  On.delete("/company/{id}").json { req: Req ->
    val id = req.param("id").toLong()
    companiesService.deleteCompany(id)
  }
}
