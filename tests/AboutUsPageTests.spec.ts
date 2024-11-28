import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import { LogInPage } from '../PageObjects/LogInPage'
import { AboutUsPage } from '../PageObjects/AboutUsPage'

test.beforeEach(async ({page})=> {
page.goto('https://demoblaze.com/index.html')

})

test ('Verify that playing about us video is possible by clicking on video', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onAboutUsPage= new AboutUsPage(page)

   await navigateTo.aboutUsPage()
    await onAboutUsPage.playingVideoThatApearsAfterClickingAboutUsButton()

    //asertovacu da se pojavilo dugme pause u donjem levom uglu 
})

test ('Verify that pausing about us video is possible by clicking on video', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onAboutUsPage= new AboutUsPage(page)

   await navigateTo.aboutUsPage()
    await onAboutUsPage.playingVideoThatApearsAfterClickingAboutUsButton()

    //asertovacu da se pojavilo dugme play u donjem levom uglu 
})

test ('Verify that playing about us video is possible by clicking on play button', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onAboutUsPage= new AboutUsPage(page)

   await navigateTo.aboutUsPage()
    await onAboutUsPage.playingVideoThatApearsAfterClickingAboutUsButton()

    //asertovacu da se pojavilo dugme pause u donjem levom uglu 
})

test ('Verify that pausing about us video is possible by clicking on pause button', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onAboutUsPage= new AboutUsPage(page)

   await navigateTo.aboutUsPage()
    await onAboutUsPage.playingVideoThatApearsAfterClickingAboutUsButton()

    //asertovacu da se pojavilo dugme play u donjem levom uglu 
})

test ('Verify that closing about us dialog box is possible by clicking on Cancel button', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onAboutUsPage= new AboutUsPage(page)

   await navigateTo.aboutUsPage()
    await onAboutUsPage.closingVideoThatApearsAfterClickingAboutUsButtonOnCloseButton()

    //asertovacu da se pojavilo dugme play u donjem levom uglu 
})

//kod svih ovih moram DA UBCIM DA NE KLIKNE NA DUGME AKO JE DIALOG VEC OTVOREN 