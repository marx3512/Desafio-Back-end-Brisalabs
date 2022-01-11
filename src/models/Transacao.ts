import { Entity, Column, CreateDateColumn, PrimaryColumn} from 'typeorm';
import { v4 as uuid} from 'uuid';

@Entity("transacao")
export class Transacao {
    @PrimaryColumn()
    id: string;

    @Column()
    envio: string;

    @Column()
    recebe: string;

    @Column()
    valor: number;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    } 
}