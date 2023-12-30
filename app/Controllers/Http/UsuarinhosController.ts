// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// Import do Model sem a extensão .ts
import Usuarinho from 'App/Models/Usuarinho'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsuarinhosController {

    public async index() {
        // Uso do método all() diretamente no Model
        return Usuarinho.all()
    }

    public async store({ request, response }: HttpContextContract) {
        const { nome, cpf, senha } = request.body()
        // Uso do método create() diretamente no Model
        const newUser = await Usuarinho.create({ nome, cpf, senha })
        return response.status(201).send(newUser)
    }

    public async show({ params, response }: HttpContextContract) {
        // Uso do método find() diretamente no Model
        const user = await Usuarinho.find(params.id)

        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }

        return user
    }

    public async update({ params, request, response }: HttpContextContract) {
        // Uso do método find() diretamente no Model
        const user = await Usuarinho.find(params.id)

        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }

        user.merge(request.body())
        await user.save()

        return user
    }

    public async destroy({ params, response }: HttpContextContract) {
        // Uso do método find() diretamente no Model
        const user = await Usuarinho.find(params.id)

        if (!user) {
            return response.status(404).json({ message: 'User not found' })
        }

        await user.delete()
        return response.status(204)
    }
}
