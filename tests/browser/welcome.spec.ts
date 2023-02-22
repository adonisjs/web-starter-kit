import { test } from '@japa/runner'

test.group('Home page', () => {
  test('visit home page', async ({ visit, browserContext }) => {
    await browserContext.setCookie('username', 'virk')

    const page = await visit('/')
    await page.assertTextContains('body', 'It works!')
  })
})
