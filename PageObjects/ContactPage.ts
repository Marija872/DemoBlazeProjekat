import {Page} from 'playwright/test'

export class ContactPage {
    private readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async sendingMessageTrueContactFormThatAppearsAfterClickingContactButton (email:string, name:string, message:string){

         const contactForm = this.page.locator('.modal-content', {hasText: "New message"})
         await contactForm.getByLabel('Contact Email:').fill(email)
         await contactForm.getByLabel('Contact Name:').fill(name)
         await contactForm.getByLabel('Message:').fill(message)
         await contactForm.getByRole('button', {name:"Send message"}).click()
         


    }

}