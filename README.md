# ChatBot

A full-stack chatbot application powered by OpenAI's GPT-4o-mini model with Spring Boot backend and React frontend.

## Features

- Real-time AI chat responses
- REST API communication
- Responsive web interface
- CORS-enabled for local development

## Tech Stack

- **Backend:** Java 17, Spring Boot, Maven
- **Frontend:** React 18, Axios
- **AI:** OpenAI GPT-4o-mini API

## Project Structure

```
chatBot/
├── src/                    # Spring Boot backend
├── pom.xml
├── chatBotFrontend/
│   └── chatgpt-react/     # React frontend
└── README.md
```

## Setup

### Backend

1. Add your OpenAI API key to `src/main/resources/application.properties`:
```properties
spring.application.name=springboot-chatgpt
openapi.api.model=gpt-4o-mini
openapi.api.url=https://api.openai.com/v1/chat/completions
openapi.api.key=YOUR_OPENAI_API_KEY
```

2. Run the backend:
```bash
./mvnw spring-boot:run
```
Backend runs at: http://localhost:8080

### Frontend

1. Navigate to frontend directory:
```bash
cd chatBotFrontend/chatgpt-react
```

2. Install dependencies and start:
```bash
npm install
npm start
```
Frontend runs at: http://localhost:3000

## Usage

1. Start both backend and frontend
2. Open http://localhost:3000 in your browser
3. Type a message and chat with the AI!

## Important Note

Always use `http://localhost:8080` (not `https://`) when connecting to the backend to avoid SSL connection errors.

## License

This project is licensed under the MIT License.

## Contact

**Somesh Hanji**  
📧 someshhanji26@gmail.com  
📍 India
