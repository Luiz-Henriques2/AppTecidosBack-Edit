import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveColumnFromTable extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('fornecedor')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      // Aqui você pode recriar a coluna caso queira reverter a migração
      table.string('fornecedor')
    })
  }
}