import { MigrationInterface, QueryRunner } from "typeorm";

export class SuscriberTable1756975911763 implements MigrationInterface {
    name = 'SuscriberTable1756975911763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscribers" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "subscribed" boolean NOT NULL, CONSTRAINT "PK_cbe0a7a9256c826f403c0236b67" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subscribers"`);
    }

}
