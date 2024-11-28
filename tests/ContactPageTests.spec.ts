import {test, expect} from 'playwright/test'
import {MenuBar} from '../PageObjects/MenuBar'
import { ContactPage } from '../PageObjects/ContactPage'

test.beforeEach(async ({page})=> {
page.goto('https://demoblaze.com/index.html')

})

test ('Verify that sending message is possible by entering letters in contact name field and all characters in contact email field, and all characters into message field', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onContactPage= new ContactPage(page)

   await navigateTo.contactPage()
    await onContactPage.sendingMessageTrueContactFormThatAppearsAfterClickingContactButton('ljiljana@pavlovic023.com', 'Ljiljana Pavlovic', 'aA0!')

    expect(page.getByLabel('Contact Email:').getByText('ljiljana@pavlovic023.com'))
    expect(page.getByLabel('Contact Name:').getByText('Ljiljana Pavlovic'))
    expect(page.getByLabel('Message:').getByText('aA0!'))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Thanks for the message!!')
    
}) 
})

test ('Verify that sending message is NOT possible by entering contact email field without @ symbol', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onContactPage= new ContactPage(page)

   await navigateTo.contactPage()
    await onContactPage.sendingMessageTrueContactFormThatAppearsAfterClickingContactButton('ljiljanapavlovic023.com.', 'Ljiljana Pavlovic', 'aA0!')

    expect(page.getByLabel('Contact Email:').getByText('ljiljana@pavlovic023.com'))
    expect(page.getByLabel('Contact Name:').getByText('Ljiljana Pavlovic'))
    expect(page.getByLabel('Message:').getByText('aA0!'))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Message is not sent!!')
    
}) 
})

test ('Verify that sending message is NOT possible by leaving contact name field empty', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onContactPage= new ContactPage(page)

   await navigateTo.contactPage()
    await onContactPage.sendingMessageTrueContactFormThatAppearsAfterClickingContactButton('ljiljana@pavlovic023.com', '', 'aA0!')

    expect(page.getByLabel('Contact Email:').getByText('ljiljana@pavlovic023.com'))
    expect(page.getByLabel('Contact Name:').getByText(''))
    expect(page.getByLabel('Message:').getByText('aA0!'))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Message is not sent!!')
    
}) 
})

test ('Verify that sending message is NOT possible by leaving email field empty', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onContactPage= new ContactPage(page)

   await navigateTo.contactPage()
    await onContactPage.sendingMessageTrueContactFormThatAppearsAfterClickingContactButton('', 'Ljiljana Pavlovic', 'aA0!')

    expect(page.getByLabel('Contact Email:').getByText(''))
    expect(page.getByLabel('Contact Name:').getByText('Ljiljana Pavlovic'))
    expect(page.getByLabel('Message:').getByText('aA0!'))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Message is not sent!!')
    
}) 
})

test ('Verify that sending message is NOT possible by leaving message field empty', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onContactPage= new ContactPage(page)

   await navigateTo.contactPage()
    await onContactPage.sendingMessageTrueContactFormThatAppearsAfterClickingContactButton('ljiljana@pavlovic', 'Ljiljana Pavlovic', '')

    expect(page.getByLabel('Contact Email:').getByText('ljiljana@pavlovic'))
    expect(page.getByLabel('Contact Name:').getByText('Ljiljana Pavlovic'))
    expect(page.getByLabel('Message:').getByText(''))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Message is not sent!!')
    
}) 
})

test ('Verify that sending message is NOT possible by leaving fields empty', async ({page})=> {

    const navigateTo = new MenuBar(page)
    const onContactPage= new ContactPage(page)

   await navigateTo.contactPage()
    await onContactPage.sendingMessageTrueContactFormThatAppearsAfterClickingContactButton('', '', '')

    expect(page.getByLabel('Contact Email:').getByText(''))
    expect(page.getByLabel('Contact Name:').getByText(''))
    expect(page.getByLabel('Message:').getByText(''))
    page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Message is not sent!!')
    
}) 
})

