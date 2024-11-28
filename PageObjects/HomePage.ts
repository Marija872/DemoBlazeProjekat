import { randomInt } from 'crypto'
import {expect, Page} from 'playwright/test'

export class HomePage {
    private readonly page: Page

    constructor (page: Page){
        this.page = page

    
}
    async choosePhoneCategory (){

        const phoneOption= this.page.getByText('Phones').click()
    }

    async chooseLaptopsCategory (){

        const laptopOption= this.page.getByText('Laptops').click()
    }

    async chooseMonitorsCategory (){

        const monitorOption= this.page.getByText('Monitors').click()
    }

    async addToCartRandomProduct (){
        
        const products = this.page.locator('.col-lg-9')
        const randomIndex = Math.floor(Math.random() * (await products.count()))
        const randomProduct = products.locator('.card-title').nth(randomIndex)
        await randomProduct.click()

        const productName= randomProduct.textContent
    
        const addToCartButton = this.page.getByText('Add to cart')
        await addToCartButton.click()

    }


}