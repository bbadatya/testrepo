const {test, expect} = require('@playwright/test');

test.skip('Handling Alerts', async ({page}) => {

    // By default playwright handles alerts of all types, but if we want to handle and some validation, then
    // before triggering alert we need to use dialog handler provided by playwright

    // 1) - simple alert - Simple alerts with OK button
    //2) - Confirmation Alert with OK and cancel button
    //3) - prompt Alert - by entering some input along with OK and Cancel button

    await page.goto('https://testautomationpractice.blogspot.com/')

    // To enable dialog window handler
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

        await page.locator('#alertBtn').click();

    })

})

test.skip('Handling Confirm Alerts with OK and Cancel', async ({page}) => {

    // By default playwright handles alerts of all types, but if we want to handle and some validation, then
    // before triggering alert we need to use dialog handler provided by playwright

    // 1) - simple alert - Simple alerts with OK button
    //2) - Confirmation Alert with OK and cancel button
    //3) - prompt Alert - by entering some input along with OK and Cancel button

    await page.goto('https://testautomationpractice.blogspot.com/')

    // To enable dialog window handler
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()// OK button
        //await dialog.dismiss()// cancel button

        await page.locator('#confirmBtn').click();
        //await expect(await page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
        await expect(await page.locator('#demo')).toHaveText('You pressed OK!')

    })

})

test('Handling Prompt Alert', async ({page}) => {

    // By default playwright handles alerts of all types, but if we want to handle and some validation, then
    // before triggering alert we need to use dialog handler provided by playwright

    // 1) - simple alert - Simple alerts with OK button
    //2) - Confirmation Alert with OK and cancel button
    //3) - prompt Alert - by entering some input along with OK and Cancel button

    await page.goto('https://testautomationpractice.blogspot.com/')

    // To enable dialog window handler
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John')// OK button
        //await dialog.dismiss()// cancel button

        await page.locator('#confirmBtn').click();
        await expect(await page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')

    })

})