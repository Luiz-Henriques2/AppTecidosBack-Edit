import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddColumnToTables extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('favoritar').defaultTo(false)
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('favoritar')
    })
  }
}
