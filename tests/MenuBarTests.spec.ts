import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import { chromium } from 'playwright';

test.beforeEach (async ({page}) => {
       
    await page.goto('https://demoblaze.com/index.html', { waitUntil: 'load' })
    
    })

test('Navigate to homepage', async ({page})=> {

    const navigateTo = new MenuBar(page)

await navigateTo.homePage()
await expect(page.locator('#nava')).toBeVisible()
await expect(page.getByText('Home')).toBeVisible()
await expect(page.locator('#tbodyid')).toBeVisible()


})

test('Navigate to contact', async ({page})=> {

    const navigateTo = new MenuBar(page)

await navigateTo.contactPage()

await expect(page.getByLabel('Contact Email:')).toBeVisible()
await expect(page.getByLabel('Contact Name:')).toBeVisible()
await expect(page.getByLabel('Message:')).toBeVisible()

await expect(page.locator('#exampleModalLabel')).toBeVisible()

})

test('Navigate to about us', async ({page})=> {

    const navigateTo = new MenuBar(page)

await navigateTo.aboutUsPage()

await expect(page.locator('#videoModalLabel').getByText('About us')).toBeVisible()
await expect(page.locator('#videoModalLabel')).toBeVisible()
    expect(page.getByRole('button', { name: 'Close' }))


})

test('Navigate to cart', async ({page})=> {

    const navigateTo = new MenuBar(page)

await navigateTo.cartPage()

await expect(page.getByText('Products')).toBeVisible()
await expect(page.getByText('Pic')).toBeVisible()
await expect(page.getByText('Title')).toBeVisible()
await expect(page.getByText('Price')).toBeVisible()



})

test('Navigate to log in', async ({page})=> {

    const navigateTo = new MenuBar(page)

await navigateTo.logInPage()

})

test('Navigate to sign up', async ({page})=> {

    const navigateTo = new MenuBar(page)

await navigateTo.signUpPage()

await expect(page.getByLabel('Username:')).toBeVisible()
await expect(page.getByLabel('Password:')).toBeVisible()
await expect(page.locator('#signInModalLabel')).toBeVisible()

})


