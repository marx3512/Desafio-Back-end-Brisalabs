import { getRepository } from "typeorm";
import { Transacao } from "../models/Transacao";
import { Pix } from "../models/Pix";

type TransationRequest = {
    envio: string,
    recebe: string,
    valor: number
}



export class CreateTransationService {
    async execute({ envio, recebe, valor}: TransationRequest): Promise<Transacao | Error> {
        const repoTransacao = getRepository(Transacao);
        const repoPix = getRepository(Pix);

        if( !(await repoPix.findOne({ usuario_id: envio }))) {
            return new Error("Chave pix de envio não existe")
        }

        else if(!(await repoPix.findOne({ usuario_id: recebe }))) {
            return new Error("Chave pix de receber não existe")
        }

        else if( valor == null || valor < 0){
            return new Error("Valor inadequado")
        }

        const transacao = repoTransacao.create({envio, recebe, valor})

        await repoTransacao.save(transacao);

        return transacao;

    }
}