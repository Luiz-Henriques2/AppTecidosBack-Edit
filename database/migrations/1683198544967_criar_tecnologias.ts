import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddColumnToTables extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('uv').defaultTo(false)
      table.boolean('dry').defaultTo(false)
      table.boolean('insect').defaultTo(false)
      table.boolean('smart').defaultTo(false)
      table.boolean('defense').defaultTo(false)
      table.boolean('chlomax').defaultTo(false)
      table.boolean('hydro').defaultTo(false)
      table.boolean('eco').defaultTo(false)
      table.boolean('shield').defaultTo(false)
      table.boolean('undertech').defaultTo(false)
      table.boolean('ultraflex').defaultTo(false)
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('uv')
      table.dropColumn('dry')
      table.dropColumn('insect')
      table.dropColumn('smart')
      table.dropColumn('defense')
      table.dropColumn('chlomax')
      table.dropColumn('hydro')
      table.dropColumn('eco')
      table.dropColumn('shield')
      table.dropColumn('undertech')
      table.dropColumn('ultraflex')
    })
  }
}
