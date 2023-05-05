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
  public favoritar: boolean

  @column()
  public uv: boolean

  @column()
  public dry: boolean

  @column()
  public insect: boolean

  @column()
  public smart: boolean

  @column()
  public defense: boolean

  @column()
  public chlomax: boolean

  @column()
  public hydro: boolean

  @column()
  public eco: boolean

  @column()
  public shield: boolean

  @column()
  public undertech: boolean

  @column()
  public ultraflex: boolean
//-----------------------------------------------------
@column()
public durabilidade: boolean

@column()
public toqueaveludado: boolean

@column()
public respirabilidade: boolean

@column()
public duplaface: boolean

@column()
public leveza: boolean

@column()
public altacobertura: boolean

@column()
public elasticidade: boolean

@column()
public secagemrapida: boolean

@column()
public toquegelado: boolean

@column()
public toquemacio: boolean

@column()
public toquedebrilho: boolean

@column()
public zerotransparencia: boolean

@column()
public naoesgarca: boolean

@column()
public naopinica: boolean

@column()
public oekotex: boolean

@column()
public compressao: boolean

@column()
public controledeodor: boolean
//-----------------------------------------------------
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
