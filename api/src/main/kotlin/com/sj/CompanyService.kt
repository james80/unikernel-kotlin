package com.sj

import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentSkipListMap
import java.util.concurrent.atomic.AtomicLong

@Service
class CompanyService {

    private final var count: AtomicLong = AtomicLong(1)
    private final var companies: ConcurrentSkipListMap<Long, Company> = ConcurrentSkipListMap()

    fun addCompany(company: Company) {
        var key = count.andIncrement
        companies.put(key, Company(
                id = key,
                name = company.name,
                description = company.description))
    }

    fun updateCompany(id: Long, company: Company) {
        companies.put(id, Company(
                id = id,
                name = company.name,
                description = company.description))
    }

    fun getCompanies(): List<Company> {
        return companies.entries.map { entry -> entry.value }
    }

    fun deleteCompany(id: Long) {
        companies.remove(id)
    }

}
