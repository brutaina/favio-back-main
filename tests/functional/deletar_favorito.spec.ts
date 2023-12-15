import { test } from '@japa/runner'

test.group('Deletar favorito', () => {
  test('deletar favorito', async ({client})=>{
    //deletar favorotio com id 1
    const resposta= await client.delete('/favoritos')
      resposta.assertStatus(200)
    })

  // Write your test here
  test('deletar favorito inexistente', async ({client})=>{
    //deletar favorotio com id 1
    const resposta= await client.delete('/favoritos')
      resposta.assertStatus(204)
    })

})
