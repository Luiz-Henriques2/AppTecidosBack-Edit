import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, computed } from '@ioc:Adonis/Lucid/Orm'
import Tecido from './Tecido'


export default class Fornecedor extends BaseModel {
  @hasMany(() => Tecido)
  public tecidos: HasMany<typeof Tecido>

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public whatsapp: string

  @column()
  public endereco: string

  @column()
  public site: string

  @column()
  public tecidoId: number

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get tecido_id () {
    return this.$attributes.tecidoId
  }

  public set tecido_id (value: number) {
    this.$attributes.tecidoId = value
  }
}
