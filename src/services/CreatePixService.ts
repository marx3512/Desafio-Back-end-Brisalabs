import { getRepository } from "typeorm";
import { Pix } from "../models/Pix";
import { Usuario } from "../models/Usuario";

type PixRequest = {
    chave_pix: string,
    usuario_id: string,
}



export class CreatePixService {
    async execute({ chave_pix, usuario_id}: PixRequest): Promise<Error | Pix> {
        const repo = getRepository(Pix);
        const repoUsuario = getRepository(Usuario);

        const [listPix,amountPix] = await repo.findAndCount({ usuario_id })

        if(!(await repoUsuario.findOne(usuario_id))){
            return new Error("Usuario não existe")
        }
        
        else if(await repo.findOne({ chave_pix })){
            return new Error("Chave ja esta cadastrada")
        }

        else if( amountPix == 3){
            return new Error("Usuario ja possui 3 chaves")
        }

        const pix = repo.create({chave_pix, usuario_id});

        await repo.save(pix);

        return pix;
    }
}