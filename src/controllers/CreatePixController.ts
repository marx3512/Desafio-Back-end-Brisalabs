import { Request, Response } from "express";
import { CreatePixService } from "../services/CreatePixService";



export class CreatePixController {
    async handle(request: Request, response: Response) {
        const { chave_pix, usuario_id } = request.body;

        const service = new CreatePixService();

        const result = await service.execute({
            chave_pix,
            usuario_id
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}