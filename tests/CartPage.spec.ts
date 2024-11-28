import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import { HomePage } from '../PageObjects/HomePage'
import { CartPage } from '../PageObjects/CartPage'


test.beforeEach(async ({page})=> {

    page.goto('https://demoblaze.com/index.html')
    
})

test ('Verify that deleting a product from cart is possible', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)

    
    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()
    
    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()
    
    await navigateTo.cartPage()

    const onCartPage = new CartPage(page)
    await onCartPage.deleteProduct()
    
    
})

test ('Verify that placing an order is possible', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)

    
    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()
    
    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()
    
    await navigateTo.cartPage()

    const onCartPage = new CartPage(page)
    await onCartPage.placeOrder()


})

test('Verify that purchasing is possible', async ({page})=> {
    test.setTimeout(100000)

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)

    
    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()
    await page.waitForTimeout(3000)
    
    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()
    await page.waitForTimeout(3000)
    
    await navigateTo.cartPage()
    await page.getByRole("button", {name: 'Place Order'}).click()
    await page.waitForTimeout(3000)

    const onCartPage = new CartPage(page)
    await onCartPage.purchaseOrder('Ljiljana Pavlovic', 'Serbia', 'Novi Sad', '5565485-65', 'april', '2026')

})

