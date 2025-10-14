const {test, expect } = require("playwright/test")


test('calender Validations', async ({page})=>
    {


        page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        const month="6";
        const year = "2027";
        const date = "15";

        const expectedList = [month, year, date];

        await page.locator(".react-date-picker__inputGroup").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.getByText(year).click();
        await page.locator(".react-calendar__year-view__months__month").nth(month-1).click();
        await page.locator("//abbr[text()='"+date+"']").click();

        const inputs = page.locator(".react-date-picker__inputGroup input");

        for(let index=0; index<inputs.length; index++){
            const values = inputs[index].getAttribute("value");
            expect(values).toEqual(expectedList[index]);
        }

        




    });
