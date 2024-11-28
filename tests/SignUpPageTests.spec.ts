import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import {SignUpPage} from '../PageObjects/SingUpPage'


test.beforeEach(async ({page})=> {
page.goto('https://demoblaze.com/index.html')

})

test ('Verify that sign in is possible by entering letters in username field and characters in password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('Ljiljana Pavlovic', 'Password123.')

    expect(page.getByLabel('Username:').getByText('Ljiljana Pavlovic'))
    expect(page.getByLabel('Password:').getByText('Password123.'))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Sign up successful.')
    
}) 
})

test ('Verify that sign in is possible by entering letters in username field and just letters in password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('Ljiljana Pavlovic', 'password')
    
})

test ('Verify that sign in is possible by entering letters in username field and only numbers into password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('Ljiljana Pavlovic', '123456789')

})

test ('Verify that sign in is possible by entering letters in username field and only symbols into password field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('Ljiljana Pavlovic', '!!!!@@@###')

})

test ('Verify that sign in is NOT possible by entering numbers and special characters in username field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('12345!@', 'Password123.')

})

test ('Verify that sign in is NOT possible by leaving username field blank', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('', 'Password123.')

})

test ('Verify that sign in is NOT possible by leaving password field blank', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('Ljiljana Pavlovic', '')

})

test ('Verify that sign in is NOT possible by leaving username and password fields blank', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onSignUpPage= new SignUpPage(page)

   await navigateTo.signUpPage()
    await onSignUpPage.signingUpUsingFormThatApearsAfterClickingSignIngButton('', '')

})
