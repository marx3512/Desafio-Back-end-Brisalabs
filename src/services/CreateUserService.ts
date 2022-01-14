import { getRepository } from 'typeorm';
import { Usuario } from '../models/Usuario';

type UsuarioRequest = {
    nome: string,
    telefone: string,
}

export class CreateUserService {
    async execute({ nome, telefone}: UsuarioRequest): Promise<Usuario | Error> {
        const repo = getRepository(Usuario);

        if( await repo.findOne({ nome })) {
            return new Error("Usuario ja existe");
        }

        const usuario = repo.create({
            nome,
            telefone,
        });

        await repo.save(usuario);

        return usuario;
    }
}