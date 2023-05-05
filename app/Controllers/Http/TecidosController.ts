import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tecido from 'App/Models/Tecido'
import Application from '@ioc:Adonis/Core/Application'

import { v4 as uuidv4 } from 'uuid'

export default class TecidosController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }

    const tecido = await Tecido.create(body)

    response.status(201)

    return {
      message: 'tecido criado com sucesso!',
      data: tecido,
    }
  }

  public async index() {
    const tecidos = await Tecido.query().preload('fornecedors')

    return{
        data: tecidos,
    }
  }

  public async show({ params }: HttpContextContract) {
    const tecido = await Tecido.findOrFail(params.id)

    await tecido.load('fornecedors')

    return{
        data: tecido,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const tecido = await Tecido.findOrFail(params.id)

    await tecido.delete()

    return{
      message: 'Tecido excluido com sucesso!',
        data: tecido,
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const body = request.body()

    const tecido = await Tecido.findOrFail(params.id)

    tecido.nome = body.nome
    tecido.composicao = body.composicao
    tecido.gramatura = body.gramatura
    tecido.rendimento = body.rendimento
    tecido.acabamento = body.acabamento
    tecido.referencia = body.referencia
    tecido.avista = body.avista
    tecido.prazo = body.prazo
    tecido.observacao = body.observacao
    tecido.fornecedor_id = body.fornecedor_id

    tecido.caracteristica = body.caracteristica
    tecido.tecnologia = body.tecnologia
    tecido.favoritar = body.favoritar
    tecido.prazoentrega = body.prazoentrega
    tecido.prazodesenvolvimento = body.prazodesenvolvimento

    tecido.uv = body.uv
    tecido.dry = body.dry
    tecido.insect = body.insect
    tecido.smart = body.smart
    tecido.defense = body.defense
    tecido.chlomax = body.chlomax
    tecido.hydro = body.hydro
    tecido.eco = body.eco
    tecido.shield = body.shield
    tecido.undertech = body.undertech
    tecido.ultraflex = body.ultraflex

    tecido.durabilidade = body.durabilidade
    tecido.toqueaveludado = body.toqueaveludado
    tecido.respirabilidade = body.respirabilidade
    tecido.duplaface = body.duplaface
    tecido.leveza = body.leveza
    tecido.altacobertura = body.altacobertura
    tecido.elasticidade = body.elasticidade
    tecido.secagemrapida = body.secagemrapida
    tecido.toquegelado = body.toquegelado
    tecido.toquemacio = body.toquemacio
    tecido.toquedebrilho = body.toquedebrilho
    tecido.zerotransparencia = body.zerotransparencia
    tecido.naoesgarca = body.naoesgarca
    tecido.naopinica = body.naopinica
    tecido.oekotex = body.oekotex
    tecido.compressao = body.compressao
    tecido.controledeodor = body.controledeodor

 if (tecido.image != body.image || !tecido.image) {
  const image = request.file('image', this.validationOptions)

  if (image) {
    const imageName = `${uuidv4()}.${image!.extname}`

    await image.move(Application.tmpPath('uploads'), {
      name: imageName,
    })

    tecido.image = imageName
  }
}
    await tecido.save()
    response.status(201)

    return {
      message: 'Tecido atualizado com sucesso!',
      data: tecido,
    }
  }
}
