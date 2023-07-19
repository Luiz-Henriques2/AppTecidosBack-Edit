import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {

  public async run () {
    await User.createMany([
      {
        email: '7p@p.com',
        password: '1',
      },
      {
        email: '7y@y.com',
        password: '1'
      }
    ])
  }

}
