import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePix1641682004935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pix",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "chave_pix",
                        type: "varchar",
                    },
                    {
                        name: "usuario_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_usuario_pix",
                        columnNames: ["usuario_id"],
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pix")
    }

}
