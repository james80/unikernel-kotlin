package com.sj

import java.util.concurrent.ConcurrentSkipListMap
import java.util.concurrent.atomic.AtomicLong

class CompanyService {

  private val count: AtomicLong = AtomicLong(1)
  private val companies: ConcurrentSkipListMap<Long, Company> = ConcurrentSkipListMap()

  fun addCompany(company: Company): Company = count.getAndIncrement()
      .let { key ->
        Company(id = key, name = company.name, description = company.description)
            .also { c -> companies.put(key, c) }
      }

  fun getCompanies(): List<Company> = companies.entries.map { entry -> entry.value }

  fun deleteCompany(id: Long) = companies.remove(id)
}
