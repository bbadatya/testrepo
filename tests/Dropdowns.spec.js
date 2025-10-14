const {test, expect} = require('@playwright/test');

test('Dropdown Test', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // 1) Dropdown using select

    //await page.locator('#country').selectOption('India'); // visible text
    //await page.locator('#country').selectOption({'label' :'India'}); // visisble text using label attribute

    //await page.selectOption('#country', 'India') // using direct selectOption method without using page.locator

    //await page.locator('#country').selectOption({'index' :2}); // using index
    //await page.locator('#country').selectOption({'value' :'uk'}); //using value attributes

    //await page.waitForTimeout(5000)
    

    // Assertions
    // 2) check no of options in dropdown --> Approach1
    //const options = await page.locator('#country option')

    //console.log(options.textContent());
    //await expect(options).toHaveCount(10)

    // check no of options in dropdown --> Approach2

    //const countryOpt = await page.$$('#country option')
    //await expect(countryOpt.length).toBe(10)

    // 3) check the value presence in the dropdown --> Approach1

    //const content = await page.locator('#country').textContent()

    //await expect(content.includes('India')).toBeTruthy();


    // 4) check the value presence in the dropdown --> Approach2 using loops

    /*const options_country = await page.$$('#country option')

    let status = false;

    for(const opti of options_country)
        
    {
        let value = await opti.textContent();

        if(value.includes('France'))
        {
            status = true;
            break;
        }

    }

    await expect(status).toBeTruthy()*/

    //5) select the value from dropdown using loops

    const options = await page.$$('#country option');

    for(const option of options)

        {
            let value = await option.textContent()
            if(value.includes('France')){

                await page.selectOption('#country', value);
                break;

            }

        }

    await page.waitForTimeout(5000)
    await page.close()




})