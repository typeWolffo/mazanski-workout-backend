import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1662657077409 implements MigrationInterface {
  name = 'test1662657077409';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "excercises" ADD "time" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "excercises" DROP COLUMN "time"`);
  }
}
