import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Application from '@ioc:Adonis/Core/Application'
import { v4 as uuidv4 } from 'uuid'

export default class UsersController {

  //'all users'
  public async index() {
    const users = await User.query()
    return{
        data: users,
    }
  }

  //'create user'
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

    const user = await User.create(body)

    response.status(201)

    return {
      message: 'Usuário criado com sucesso!',
      data: user,
    }
  }

  //'get user by id'
  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return{
        data: user,
    }
  }

  //'change user'
  public async update({ params, request, response }: HttpContextContract) {
    const body = request.body()
  
    const user = await User.findOrFail(params.id)
  
    user.merge(body);
    /*
    if (body.image && (user.image != body.image || !user.image)) {
      const image = request.file('image', this.validationOptions)

      if (image) {
        const imageName = `${uuidv4()}.${image!.extname}`

        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })

        user.image = imageName
      }
    }
    */
    await user.save()
  
    response.status(201)
  
    return {
      message: 'Usuário atualizado com sucesso!',
      data: user,
    }
  }
  
  //'delete user'
  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return{
      message: 'Usuário excluido com sucesso!',
        data: user,
    }
  }

}