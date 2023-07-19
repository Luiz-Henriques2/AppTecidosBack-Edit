//

import Route from '@ioc:Adonis/Core/Route'
//import User from 'App/Models/User'

Route.group(() => {

//Route.get('/users', async() =>{
//    return User.all()
//})
//Route.get('/users', 'UsersController.index')
//Route.post('/users', 'UsersController.store')
//Route.put('/users/:id', 'UsersController.update')
//Route.get('/users/:id', 'UsersController.show')
//Route.delete('/users/:id', 'UsersController.destroy')

Route.resource('/users', 'UsersController').apiOnly

}).prefix('/api').middleware('auth')