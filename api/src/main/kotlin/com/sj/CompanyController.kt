package com.sj

import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class CompanyController(companyService: CompanyService) {

  private var companyService = companyService

  @PostMapping("/company")
  fun post(@RequestBody company: Company) {
    companyService.addCompany(company)
  }

  @PutMapping("/company/{id}")
  fun put(@PathVariable id: Long, @RequestBody company: Company) {
    companyService.updateCompany(id, company)
  }

  @GetMapping("/companies")
  fun get(): List<Company> {
    return companyService.getCompanies()
  }

  @DeleteMapping("/company/{id}")
  fun delete(@PathVariable id: Long) {
    companyService.deleteCompany(id)
  }
}
