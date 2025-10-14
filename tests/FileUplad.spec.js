const {test, expect} = require('@playwright/test')

test('File Upload - Single file', async ({page}) =>{

    await page.goto('https://tus.io/demo');

    await page.waitForSelector('#P0-0')

    await page.locator('#P0-0').setInputFiles('tests/testFiles/Sample_FIle_test1.pdf')
    
    await page.waitForTimeout(3000)

})

test.only('File Upload - Multiple files', async ({page}) =>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('[name="filesToUpload"]')

    await page.locator('[name="filesToUpload"]')
                .setInputFiles(['tests/testFiles/Sample_FIle_test1.pdf', 
                                'tests/testFiles/Sample_File_test2.pdf'])

    await page.waitForTimeout(5000)

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Sample_FIle_test1.pdf');// after upload verify the file names
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Sample_File_test2.pdf');

    await page.locator('[name="filesToUpload"]').setInputFiles([])// remove the files

    await expect(page.locator('#fileList li')).toHaveText('No Files Selected');// after remove verify the msg
    
    await page.waitForTimeout(5000)

})