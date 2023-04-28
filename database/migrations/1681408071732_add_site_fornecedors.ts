
// incerindo coluna em uma tabela

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddColumnToTables extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('site')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('site')
    })
  }
}
