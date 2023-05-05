import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddColumnToTables extends BaseSchema {
  protected tableName = 'tecidos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('durabilidade').defaultTo(false)
      table.boolean('toqueaveludado').defaultTo(false)
      table.boolean('respirabilidade').defaultTo(false)
      table.boolean('duplaface').defaultTo(false)
      table.boolean('leveza').defaultTo(false)
      table.boolean('altacobertura').defaultTo(false)
      table.boolean('elasticidade').defaultTo(false)
      table.boolean('secagemrapida').defaultTo(false)
      table.boolean('toquegelado').defaultTo(false)
      table.boolean('toquemacio').defaultTo(false)
      table.boolean('toquedebrilho').defaultTo(false)
      table.boolean('zerotransparencia').defaultTo(false)
      table.boolean('naoesgarca').defaultTo(false)
      table.boolean('naopinica').defaultTo(false)
      table.boolean('oekotex').defaultTo(false)
      table.boolean('compressao').defaultTo(false)
      table.boolean('controledeodor').defaultTo(false)
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('durabilidade')
      table.dropColumn('toqueaveludado')
      table.dropColumn('respirabilidade')
      table.dropColumn('duplaface')
      table.dropColumn('leveza')
      table.dropColumn('altacobertura')
      table.dropColumn('elasticidade')
      table.dropColumn('secagemrapida')
      table.dropColumn('toquegelado')
      table.dropColumn('toquemacio')
      table.dropColumn('toquedebrilho')
      table.dropColumn('zerotransparencia')
      table.dropColumn('naoesgarca')
      table.dropColumn('naopinica')
      table.dropColumn('oekotex')
      table.dropColumn('compressao')
      table.dropColumn('controledeodor')
    })
  }
}
