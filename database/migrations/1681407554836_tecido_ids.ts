
//-----------------Alterar nome da coluna----------------------------

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RenameColumn extends BaseSchema {
  protected tableName = 'fornecedors'
  protected oldColumnName = 'id_tecido'
  protected newColumnName = 'tecido_id'

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
