import { MigrationInterface, QueryRunner } from "typeorm";

export class UserNewsLetter1757049137970 implements MigrationInterface {
    name = 'UserNewsLetter1757049137970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."news_letters_status_enum" AS ENUM('Draft', 'Published')`);
        await queryRunner.query(`CREATE TABLE "news_letters" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "status" "public"."news_letters_status_enum" NOT NULL, "emailContent" character varying NOT NULL, "adminId" integer, CONSTRAINT "PK_3446ea01ab7944e651ae54f1416" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('Admin', 'User')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subscribers" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "subscribers" ADD CONSTRAINT "UQ_3e82da94a504e2d6dff5c9f393f" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "news_letters" ADD CONSTRAINT "FK_ccd8b7ddfa5c6d8d95cfca7ac8a" FOREIGN KEY ("adminId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscribers" ADD CONSTRAINT "FK_3e82da94a504e2d6dff5c9f393f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscribers" DROP CONSTRAINT "FK_3e82da94a504e2d6dff5c9f393f"`);
        await queryRunner.query(`ALTER TABLE "news_letters" DROP CONSTRAINT "FK_ccd8b7ddfa5c6d8d95cfca7ac8a"`);
        await queryRunner.query(`ALTER TABLE "subscribers" DROP CONSTRAINT "UQ_3e82da94a504e2d6dff5c9f393f"`);
        await queryRunner.query(`ALTER TABLE "subscribers" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "news_letters"`);
        await queryRunner.query(`DROP TYPE "public"."news_letters_status_enum"`);
    }

}
