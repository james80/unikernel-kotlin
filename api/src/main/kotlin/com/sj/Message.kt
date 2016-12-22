package com.sj

import java.time.LocalDateTime

data class Message(
        var date: String = LocalDateTime.now().toString(),
        var message: String
)
