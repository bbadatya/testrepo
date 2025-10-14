const { request } = require('playwright');

const {test, expect, request} = require('@playwright/test');
const loginPayload = {userEmail: "bikrambadatyatechie@gmail.com", userPassword: "Apple@123"};

test.beforeAll( async() => {



    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client");
    {
        data:loginPayload;
    }

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = loginResponse.json();

    const token = loginResponseJson.token;





});

test.beforeEach( async () => {




});

test('Child window handling', async ({browser})=>
{   
       



});