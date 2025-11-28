import express from "express";
import axios from "axios";
import { APP_CONFIG } from "./config/app.config";
import { MassegeController } from "./controller/message.controller";
import { WebhookController } from "./controller/webhook.controller";

const app = express();
app.use(express.json());

const messageController = new MassegeController();
const webhookController = new WebhookController();

app.post("/send-message", messageController.sendMessage);

app.get("/webhook", webhookController.webhook)
app.post("/webhook", webhookController.webhookMessage)

app.get('/health',(req, res)=>{
    res.send('Ok');
});

app.listen(8558, ()=>{
    console.log("Server is running on port 8558");
});
 