import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MudarNomeImagems extends BaseSchema {
  protected tableName = 'tecidos'
  protected oldColumnName = 'imagem'
  protected newColumnName = 'image'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn(this.oldColumnName, this.newColumnName)
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn(this.newColumnName, this.oldColumnName)
    })
  }
}
//-----------------Alterar nome da coluna----------------------------




