package com.springboot.springboot.chatgpt.service;

import com.springboot.springboot.chatgpt.dto.ChatGptRequest;
import com.springboot.springboot.chatgpt.dto.ChatGptResponse;
import com.springboot.springboot.chatgpt.dto.PromptReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class ChatGptService {


    private final RestClient restClient;


    public ChatGptService(RestClient restClient){
        this.restClient=restClient;
    }
    @Value("${openapi.api.key}")
    private String apiKey;

    @Value("${openapi.api.model}")
    private String model;

    public String getChatRes(PromptReq req){
        ChatGptRequest chatGptRequest = new ChatGptRequest(model,
                List.of(new ChatGptRequest.Message("user",req.prompt()))
        );
        ChatGptResponse res=restClient.post()
                .header("Authorization","Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .body(chatGptRequest)
                .retrieve()
                .body(ChatGptResponse.class);
        return res.choices().get(0).message().content();
    }

}
