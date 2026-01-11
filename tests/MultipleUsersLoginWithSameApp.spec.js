const{test, expect} = require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require('../testData/MultipleUserTestData.json')))

test.describe('data Driven Login Test', async() =>{

    for(const data of testData){

        test.describe(`Login with users ${data.id}`, function()
        {

            test('Login to Application', async({page}) =>{

                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.getByPlaceholder('Enter Email').fill(data.username);
                await page.getByPlaceholder('Enter Password').fill(data.password);

            })


        })
    }




})