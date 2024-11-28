import {Page} from 'playwright/test'

export class AboutUsPage {
    private readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async playingVideoThatApearsAfterClickingAboutUsButton (){

         const aboutUsDialog = this.page.locator('.modal-content', {hasText: "About us"})
         await aboutUsDialog.locator('.vjs-tech').click()
         

    }

    async closingVideoThatApearsAfterClickingAboutUsButtonOnCloseButton (){

        const aboutUsDialog = this.page.locator('.modal-content', {hasText: "About us"})
        await aboutUsDialog.getByRole('button', {name:"Close"}).click()
        


}


}