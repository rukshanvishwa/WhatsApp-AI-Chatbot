export class WebhookService{
    
    private static instance: WebhookService;

    public static getInstance(): WebhookService{
        if(!WebhookService.instance){
            WebhookService.instance = new WebhookService();
        }
        return WebhookService.instance;
    }

    private constructor(){

    }
}