import { Request, Response } from "express";
import { CreateTransationService } from "../services/CreateTransationService";


export class CreateTransationController {
    async handle(request: Request, response: Response) {
        const { envio, recebe, valor } = request.body;

        const service = new CreateTransationService();

        const result = await service.execute({
            envio,
            recebe,
            valor
        })

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}