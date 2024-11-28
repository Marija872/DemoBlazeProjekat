import {Page} from 'playwright/test'
import { randomInt } from 'crypto'


export class CartPage {
    private readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async deleteProduct (){

        const deleteButton= await this.page.locator('.success').getByText('Delete').first().click()
       
    }

    async placeOrder (){

        const placeOrder= this.page.getByRole("button", {name: 'Place Order'})
        await placeOrder.click()

    }
    async purchaseOrder (name: string, country: string, city:string, creditCard:string, month:string, year:string ){

        const orderForm =  this.page.locator('.modal-content', {hasText: "Place order"})
        await orderForm.waitFor()
        await orderForm.getByLabel('Name:').fill(name)
        await orderForm.getByLabel('Country:').fill(country)
        await orderForm.getByLabel('City:').fill(city)
        await orderForm.getByLabel('Credit card:').fill(creditCard)
        await orderForm.getByLabel('Month:').fill(month)
        await orderForm.getByLabel('Year:').fill(year)

        const purchase = this.page.getByRole("button", {name: "Purchase"})
        await purchase.click()
}

}