const {test, expect} =  require('@playwright/test')

test('Test1@sanity', async({page})=>{
    
    console.log('This is Test1.....')

})

// to run only sanity tag testcases command is:
// npx playwright test Tags.spec.js --project='chromium' --grep @sanity --headed
// to run only regression and sanity both then :
//npx playwright test Tags.spec.js --project='chromium' --grep @sanity@regression --headed
// to run only regression but not sanity if you have combined tags
// npx playwright test Tags.spec.js --project='chromium' --grep @regression --grep-invert @sanity --headed

test('Test2@sanity', async({page})=>{
    
    console.log('This is Test2.....')

})

test('Test3@regression', async({page})=>{
    
    console.log('This is Test3.....')

})

test('Test4@regression', async({page})=>{
    
    console.log('This is Test4.....')

})

test('Test5@sanity@regression', async({page})=>{
    
    console.log('This is Test5.....')

})