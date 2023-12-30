/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

// Substitua a linha existente
// Route.resource('favoritao', FavoritosController).apiOnly()

// Pela definição direta do resource no mesmo arquivo
import Route from '@ioc:Adonis/Core/Route'
import FavoritosController from 'App/Controllers/Http/FavoritosController'
import UsuarinhosController from 'App/Controllers/Http/UsuarinhosController'

Route.get('/', async () => {
  return { app: 'favio-back' }
})

const favoritos = [{ id: 1, nome: 'Google', url: "http://www.google.com", importante: true }]

Route.get('/favoritos', async () => {
  return favoritos
})

Route.get('/favoritos/:id', async ({ params, response }) => {
  let favoritoEncontrado = favoritos.find((favorito) => favorito.id == params.id)
  if (favoritoEncontrado == undefined)
    return response.status(404)
  return favoritoEncontrado
})

Route.get('/favoritos/:nome', async ({ params }) => {
  return { id: 1, nome: params.nome, url: "http://www.google.com", importante: true }
})

Route.post('/favoritos', async ({ request, response }) => {
  const { nome, url, importante } = request.body()
  const newFavorito = { id: favoritos.length + 1, nome, url, importante }
  favoritos.push(newFavorito)
  return response.status(201).send(newFavorito)
})


Route.resource('favoritao', FavoritosController).apiOnly()
Route.resource('usuarios', UsuarinhosController).apiOnly()
