import { Page } from "playwright/test";

 

export class MenuBar {

    readonly page: Page
    

    constructor (page: Page) {
        this.page= page
    }

   async homePage(){

await this.page.getByText('Home').click()

}

async contactPage(){
    
    await this.page.locator('.nav-item').getByText('Contact').click()
    
}
async cartPage(){
    
    await this.page.locator('.nav-link').getByText('Cart').click()

}
async aboutUsPage(){

    await this.page.locator('.nav-item').getByText('About us').click()
    
}

async logInPage(){
    
    await this.page.locator('.nav-item').getByText('Log in').locator('visible=true').click();
  //  await this.page.locator('.modal-content', {hasText: "Log in"}).waitFor()

}

async signUpPage(){
    
    await this.page.locator('.nav-item').getByText('Sign up').locator('visible=true').click();
    
    

}

async logOutPage(){
    await this.page.locator('.nav-item').getByText('Log out').locator('visible=true').click();

}


/*private async selectCurrentItem(Displayed: string){
    const currentItem = this.page.getByText(Displayed)
    const state= await currentItem.getAttribute('style')
    if (state== "display: block;")
        await currentItem.click()
}
    */


}


