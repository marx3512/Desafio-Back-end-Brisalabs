import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnPhone1641728459641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("usuarios", 
        new TableColumn({
            name: "telefone",
            type: "varchar",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("usuarios", "telefone")
    }

}
