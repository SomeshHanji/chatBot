package com.springboot.springboot.chatgpt.controller;

import com.springboot.springboot.chatgpt.dto.PromptReq;
import com.springboot.springboot.chatgpt.service.ChatGptService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/chat")
public class ChatGptController {

    private final ChatGptService chatGptService;

    public ChatGptController(ChatGptService chatGptService)
    {
        this.chatGptService=chatGptService;
    }

    @PostMapping
    public String chat(@RequestBody PromptReq promptReq){
        return chatGptService.getChatRes(promptReq);
    }
}
