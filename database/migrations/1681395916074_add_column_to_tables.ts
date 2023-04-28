
// incerindo coluna em uma tabela

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddColumnToTables extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('fornecedor')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('fornecedor')
    })
  }
}
