import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
    CREATE TRIGGER update_phone_modtime
    BEFORE UPDATE ON tb_phones
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column_phone();
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`
    DROP TRIGGER update_phone_modtime ON tb_phones
  `);
}
