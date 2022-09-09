import { MigrationInterface, QueryRunner } from "typeorm";

export class typo1662733557500 implements MigrationInterface {
    name = 'typo1662733557500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exerciseSets" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5780ff917edd0e25eeb670abc3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercises" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "yt_url" character varying NOT NULL, CONSTRAINT "PK_c4c46f5fa89a58ba7c2d894e3c3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exercises"`);
        await queryRunner.query(`DROP TABLE "exerciseSets"`);
    }

}
