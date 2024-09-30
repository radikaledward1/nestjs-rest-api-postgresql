import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDescriptionTable1727685665204 implements MigrationInterface {
    name = 'CreateDescriptionTable1727685665204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "description"`);
    }

}
