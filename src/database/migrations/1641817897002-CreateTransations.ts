import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransations1641817897002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "transacao",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "envio",
                    type: "varchar",
                },
                {
                    name: "recebe",
                    type: "varchar"
                },
                {
                    name: "valor",
                    type: "integer"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        })
    )
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transacao")
    }

}
