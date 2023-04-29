import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, computed } from '@ioc:Adonis/Lucid/Orm'
import Fornecedor from './Fornecedor'

export default class Tecido extends BaseModel {
  @hasMany(() => Fornecedor)
  public fornecedors: HasMany<typeof Fornecedor>

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public composicao: string

  @column()
  public gramatura: number

  @column()
  public rendimento: number

  @column()
  public acabamento: number

  @column()
  public referencia: number

  @column()
  public avista: number

  @column()
  public prazo: number

  @column()
  public observacao: string

  @column()
  public image: string

  @column()
  public fornecedor: string

  @column()
  public fornecedorId: number

  @column()
  public caracteristica: string

  @column()
  public tecnologia: string

  @column()
  public favoritar: Buffer

  @column()
  public prazoentrega: number

  @column()
  public prazodesenvolvimento: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get fornecedor_id () {
    return this.$attributes.fornecedorId
  }

  public set fornecedor_id (value: number) {
    this.$attributes.fornecedorId = value
  }
}
