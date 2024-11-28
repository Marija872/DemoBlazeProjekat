import {Page} from 'playwright/test'

export class LogInPage {
    private readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async logingIn (username: string, password:string){

        
         const logInForm = this.page.locator('.modal-content', {hasText: "Log in"})
         await logInForm.waitFor()
         await logInForm.locator('#loginusername').fill(username)
         await logInForm.locator('#loginpassword').fill(password)
         await logInForm.getByRole('button', {name:"Log in"}).click()

    }


}