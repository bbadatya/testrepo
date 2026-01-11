const{test, expect} = require('@playwright/test')

import * as XLSX from 'xlsx';
import path from 'path'

const userDataFile = path.join(__dirname, '.')


test('Login to application via excel', async({page}) =>{

    const workbook = XLSX.readFile(userDataFile)
    const workSheet = workbook.Sheets["Sheet 1"]
    const xlsToJson = XLSX.utils.sheet_to_json(workSheet)
    console.log(xlsToJson)

    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('#login2').click()

    await page.fill('#loginusername', 'admin')
    await page.fill('#loginpassword', 'admin')
    await page.locator("//button[normalize-space()='Log in']").click()


})