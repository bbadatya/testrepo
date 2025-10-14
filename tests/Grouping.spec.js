const {test, expect} =  require('@playwright/test')

test.afterEach(async()=>{
    console.log('This is afterEach Hook.....')
})

test.beforeEach(async()=>{
    console.log('This is BeforeEach Hook.....')
})

test.beforeAll(async()=>{
    console.log('This is beforeAll Hook.....')
})

test.afterAll(async()=>{
    console.log('This is afterAll Hook.....')
})

test.describe('Group1', async()=>{ // to execute only the this group we can use only keyword too

    test('Test 1', async({page})=>{

        console.log('This is Test 1....')
    
    })
    
    test('Test 2', async({page})=>{
    
        console.log('This is Test 2....')
    
    })
})

test.describe.skip('Group2', async()=>{ // to skip the group we use skip keyword 
    
    test('Test 3', async({page})=>{

        console.log('This is Test 3....')
    
    })
    
    test('Test 4', async({page})=>{
    
        console.log('This is Test 4....')
    
    })

})

