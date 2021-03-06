import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { nome, telefone } = request.body;

        const service = new CreateUserService();

        const result = await service.execute({ nome, telefone});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}