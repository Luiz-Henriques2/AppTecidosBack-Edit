import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Fornecedors extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome')
      table.string('email')
      table.string('telefone')
      table.string('whatsapp')
      table.string('endereco')
      table.integer('id_tecido').unsigned().references('tecidos.id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
