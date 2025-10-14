const{test, expect} = require('@playwright/test')


//Annotations 

// only
/*test.only('Test1', async({page})=>{

    console.log('This is my test 1')
})

//skip wothout any condition
test.skip('Test2', async({page})=>{

    console.log('This is my test 3')
})*/

/*test('Test3', async({page, browserName})=>{
    console.log('This is my test 3')
    if(browserName=="firefox"){
        test.skip()  
    }
    
})*/

/*test('Test4', async({page})=>{
    console.log('This is my test 4')
    test.fixme()
    
})*/

/*test('Test5', async({page})=>{
    console.log('This is my test 4')
    test.fail()// expected
    expect(1).toBe(1)// actual

    // output is : Expected to fail, but passed.
    
})*/

/*test('Test6', async({page})=>{
    console.log('This is my test 6')
    test.fail()// expected
    expect(1).toBe(10)// actual

    // output is : passed, because expected and actual are matched
    
})*/

/*test('Test7', async({page, browserName})=>{
    console.log('This is my test 7')
    if(browserName=='firefox'){
    test.fail()// expected
    }

    // output is : passed, because expected and actual are matched
    
})*/

test('Test8', async({page})=>{
    console.log('This is my test 8')
    test.slow() // does triple speed increase timeout
    //test.setTimeout(5000)
    await page.goto('https://www.demoblaze.com/index.html')

    // output is : passed, because expected and actual are matched
    
})