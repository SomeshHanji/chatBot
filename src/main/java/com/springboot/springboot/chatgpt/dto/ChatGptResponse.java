package com.springboot.springboot.chatgpt.dto;


import java.util.List;

public record ChatGptResponse(List<Choice> choices) {

    public  static record Choice(ChatGptRequest.Message message){
        public static record Message(String role, String content){

        }
    }
}
