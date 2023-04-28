import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tecidos extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('composicao')
      table.integer('gramatura')
      table.decimal('rendimento', 4, 2)
      table.integer('acabamento')
      table.integer('referencia')
      table.decimal('avista', 5, 2)
      table.decimal('prazo', 5, 2)
      table.string('observacao')
      table.string('imagem')

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
