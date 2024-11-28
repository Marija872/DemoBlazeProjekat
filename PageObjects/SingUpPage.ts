import {Page} from 'playwright/test'

export class SignUpPage {
    private readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async signingUpUsingFormThatApearsAfterClickingSignIngButton (username: string, password: string){

         const signUpForm = this.page.locator('.modal-content', {hasText: "Sign up"})
         await signUpForm.getByLabel('Username:').fill(username)
         await signUpForm.getByLabel('Password:').fill(password)
         await signUpForm.getByRole('button', {name:"Sign up"}).click()

    }

}


