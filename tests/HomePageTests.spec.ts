import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import { HomePage } from '../PageObjects/HomePage'
import { CartPage } from '../PageObjects/CartPage'


test.beforeEach(async ({page})=> {
page.goto('https://demoblaze.com/index.html')

})

test ('Verify that adding product to cart directly from Homepage is possible', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)
    

    await navigateTo.homePage()
    await onHomePage.addToCartRandomProduct()

    await navigateTo.cartPage()

    expect (page.locator('.success')).toBeVisible
    

})

test ('Verify that adding phone to cart from Phones cathegory is possible', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)
    

    await navigateTo.homePage()
    await onHomePage.choosePhoneCategory()
    await onHomePage.addToCartRandomProduct()

    await navigateTo.cartPage()

    await expect(page.locator('#tbodyid')).toContainText('Delete')
    

})

test ('Verify that adding laptop to cart from Laptops cathegory is possible', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)

    await navigateTo.homePage()
    await onHomePage.chooseLaptopsCategory()
    await onHomePage.addToCartRandomProduct()

    await navigateTo.cartPage()

    await expect(page.locator('#tbodyid')).toContainText('Delete')
    

})

test ('Verify that adding monitor to cart from Monitors cathegory is possible', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)

    await navigateTo.homePage()
    await onHomePage.chooseMonitorsCategory()
    await onHomePage.addToCartRandomProduct()

    await navigateTo.cartPage()

    await expect(page.locator('#tbodyid')).toContainText('Delete')


})

test ('Verify that adding multiple products to cart is possible', async ({page})=> {
    test.setTimeout(60000)
    const navigateTo = new MenuBar(page)
    const onHomePage= new HomePage(page)

    await navigateTo.homePage()
    await onHomePage.chooseMonitorsCategory()
    await page.waitForTimeout(3000)
    await onHomePage.addToCartRandomProduct()

    await navigateTo.homePage()
    await onHomePage.choosePhoneCategory()
    await page.waitForTimeout(3000)
    await onHomePage.addToCartRandomProduct()

    await navigateTo.homePage()
    await onHomePage.chooseLaptopsCategory()
    await page.waitForTimeout(3000)
    await onHomePage.addToCartRandomProduct()

    await navigateTo.cartPage()

    await expect(page.locator('#tbodyid')).toContainText('Delete')


})
