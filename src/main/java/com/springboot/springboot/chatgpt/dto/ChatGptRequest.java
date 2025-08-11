package com.springboot.springboot.chatgpt.dto;

import java.util.List;

public record ChatGptRequest(String model, List<Message> messages) {
    public static  record Message(String role,String content){

    }
}
