import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("usuarios")
export class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;
    
    @Column()
    telefone: string;

    constructor() {
        if(!this.id) this.id = uuid();
    }
}