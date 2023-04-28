import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'
//import Tecido from 'App/Models/Tecido'

export default class FornecedorsController {
//    public async store({ request, response, params }: HttpContextContract) {
//        const body = request.body()
//        const tecido_id = params.tecido_id
//        await Tecido.findOrFail(tecido_id)
//        body.tecido_id = tecido_id
//        const fornecedor = await Fornecedor.create(body)
//        response.status(201)
//        return {
//          message: 'Fornecedor adicionado com sucesso!',
//          data: fornecedor,}}
      //----Novas Rotas----------------------------------
      public async index() {
        const fornecedor = await Fornecedor.query().preload('tecidos')
        return{
            data: fornecedor,
        }
      }

      public async show({ params }: HttpContextContract) {
        const fornecedor = await Fornecedor.findOrFail(params.id)
        await fornecedor.load('tecidos')
        return{
            data: fornecedor,
        }
      }



      public async destroy({ params }: HttpContextContract) {
        const fornecedor = await Fornecedor.findOrFail(params.id)
    
        await fornecedor.delete()
    
        return{
          message: 'Fornecedor excluido com sucesso!',
            data: fornecedor,
        }
      }

      public async update({ params, request, response }: HttpContextContract) {
        const body = request.body()
        const fornecedor = await Fornecedor.findOrFail(params.id)
    
        fornecedor.nome = body.nome
        fornecedor.email = body.email
        fornecedor.telefone = body.telefone
        fornecedor.whatsapp = body.whatsapp
        fornecedor.endereco = body.endereco
        fornecedor.tecido_id = body.tecido_id
        fornecedor.site = body.site
    
        await fornecedor.save()
        response.status(201)

        return {
          message: 'Fornecedor atualizado com sucesso!',
          data: fornecedor,
        }
      }

      public async store({ request, response }: HttpContextContract) {
        const body = request.body()
    
        const fornecedor = await Fornecedor.create(body)
    
        response.status(201)
    
        return {
          message: 'Fornecedor criado com sucesso!',
          data: fornecedor,
        }
      }
}
