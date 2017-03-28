package com.sj

import org.springframework.web.bind.annotation.*

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
