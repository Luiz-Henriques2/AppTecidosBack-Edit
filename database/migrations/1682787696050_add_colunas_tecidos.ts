// incerindo coluna em uma tabela

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddColumnToTables extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('caracteristica')
      table.string('tecnologia')
      table.binary('favoritar')
      table.integer('prazoentrega')
      table.integer('prazodesenvolvimento')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('caracteristica')
      table.dropColumn('tecnologia')
      table.dropColumn('favoritar')
      table.dropColumn('prazoentrega')
      table.dropColumn('prazodesenvolvimento')
    })
  }
}
