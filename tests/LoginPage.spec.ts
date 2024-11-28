import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import { LogInPage } from '../PageObjects/LogInPage'

test.beforeEach(async ({page})=> {
page.goto('https://demoblaze.com/index.html')

})

test ('Verify that log in is possible by entering letters in username field and characters in password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('Ljiljana Pavlovic', 'Password123.')

    expect(page.getByLabel('Username:').getByText('Ljiljana Pavlovic'))
    expect(page.getByLabel('Password:').getByText('Password123.'))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Sign up successful.')
    
}) 
})

test ('Verify that log in is possible by entering letters in username field and just letters in password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('Ljiljana Pavlovic', 'password')
    
})

test ('Verify that log in is possible by entering letters in username field and only numbers into password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('Ljiljana Pavlovic', '123456789')

})

test ('Verify that log in is possible by entering letters in username field and only symbols into password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('Ljiljana Pavlovic', '!!!!@@@###')

})

test ('Verify that log in is NOT possible by entering numbers and special characters in username field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('12345!@', 'Password123.')

})

test ('Verify that log in is NOT possible by leaving username field blank', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('', 'Password123.')

})

test ('Verify that log in is NOT possible by leaving password field blank', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('Ljiljana Pavlovic', '')

})

test ('Verify that log in is NOT possible by leaving username and password fields blank', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('', '')

})

test ('Verify that log in is NOT possible with credentials that are not signed in', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onLogInPage= new LogInPage(page)

   await navigateTo.logInPage()
    await onLogInPage.logingIn('Ljiljana Pavlovic ne', 'Password123.')

})
