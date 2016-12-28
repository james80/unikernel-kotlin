package com.sj

import org.springframework.web.bind.annotation.*

@RestController
class CompanyController(companyService: CompanyService) {

    private final var companyService = companyService

    @PostMapping("/company")
    fun postCompany(@RequestBody company: Company) {
        companyService.addCompany(company)
    }

    @PutMapping("/company/{id}")
    fun putCompany(@PathVariable id: Long, @RequestBody company: Company) {
        companyService.updateCompany(id, company)
    }

    @GetMapping("/companies")
    fun getCompanies(): List<Company> {
        return companyService.getCompanies()
    }

    @DeleteMapping("/company/{id}")
    fun deleteCompany(@PathVariable id: Long) {
        companyService.deleteCompany(id)
    }
}
