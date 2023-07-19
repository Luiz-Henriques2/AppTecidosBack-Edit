import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

    public async login({ auth, request, response }:HttpContextContract){

        const email = request.input('email')
        const password = request.input('password')
        const user = await User.findBy('email', email)
      
        try {
          const token = await auth.use('api').attempt(email, password, {
            expiresIn: '120 mins',
            name: user?.serialize().email
          })
          return {token, /*user: user?.serialize()*/}//'user' devolve informações do usuario
        } catch {
          return response.unauthorized('Invalid credentials')
        }

    }
}