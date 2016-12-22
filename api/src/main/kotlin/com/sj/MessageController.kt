package com.sj

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class MessageController {

    @GetMapping("/message")
    fun getMessage(): Message {
        return Message(message = "This is your message today.")
    }

    @GetMapping("/message/{message}")
    fun getMessage(@PathVariable message: String): Message {
        return Message(message = message)
    }
}
