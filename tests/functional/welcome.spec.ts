import { test } from '@japa/runner'

test.group('Home page', () => {
  test('visit home page', async ({ client }) => {
    const response = await client.get('/')
    response.assertStatus(200)
    response.assertTextIncludes('It wors!')
  })
})
