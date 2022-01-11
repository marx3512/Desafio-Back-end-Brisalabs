import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Usuario } from './Usuario';

@Entity("pix")
export class Pix {
    @PrimaryColumn()
    id: string;

    @Column()
    chave_pix: string;

    @Column()
    usuario_id: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_id"})
    usuario: Usuario;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) this.id = uuid();
    }
}