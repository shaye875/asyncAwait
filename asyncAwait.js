//1
async function waitForHello() {
    let p1 = new Promise((res) => {
        setTimeout(() => {
            res("hello")
        }, 500)
    })
    let t = await p1
    return t
}
waitForHello().then((res) => {
    console.log(res);
})
//2
async function doubleAsync(n){
    const promies = new Promise((res)=>{
        setTimeout(()=>{
         res(n*2)
        },600)
    })
    const result = await promies
    console.log(result);
}
doubleAsync(5)
//3
async function fetchUser() {
    const promise = new Promise((res) => {
        setTimeout(() => {
            res({
                id: 1,
                name:"Dana"
            })
        }, 1000)
    })
    const result = await promise
    console.log(`User name: ${result.name}`);
}
fetchUser()
//4
function validateAge(age){
    return new Promise((res,rej)=>{
     if(age>=18){
        res(age)
     }else{
        rej("too young")
     }
    })
}
async function name1(){
    try{
        const r = await validateAge(16)
    console.log(r)
    }catch(err){
        console.log(err);

    }

}
name1()
//5
function getNumber() {
    let p1 = new Promise((res) => {
        setTimeout(() => {
            res(3)
        }, 400)
    })
    return p1
}
function square(n) {
    const p1 = new Promise((res) => {
        setTimeout(() => {
            res(n * n)
        }, 400)
    })
    return p1
}
async function getnumber1(){
    console.log(await square(await getNumber()))
}
getnumber1()
//6
function delay(ms){
    return new Promise((res)=>{
        setTimeout(()=>{
         res(ms)
        },ms)
    })
}
async function print(){
    for(let i = 1;i<=3;i++){
    console.log(await delay(500))
    }
}
 print()
//7
function maybeFail(){
    const random = Math.floor(Math.random()*3)
    let p1 = new Promise((res,rej)=>{
        if(random<=1){
            res("All good")
        }else{
            rej("Random error")
        }
    })
    return p1
}
async function error(){
    try{
        console.log(await maybeFail())
    }catch(err){
        console.log(err);
    }
}
error()
//8
function A(){
    const p1 = new Promise((res)=>{
        setTimeout(()=>{
            res("A")
        },300)
    })
    return p1
}
function B(){
    const p1 = new Promise((res)=>{
        setTimeout(()=>{
            res("B")
        },500)
    })
    return p1
}
function C(){
    const p1 = new Promise((res)=>{
        setTimeout(()=>{
            res("C")
        },200)
    })
    return p1
}
async function arr(){
    const list  = []
    console.log([await A(),await B(),await C()]);
}
arr()
//9
async function getGreeting(){
   let p1 = new Promise((res)=>{
    setTimeout(()=>{
        res("Hello")
    },700)
   })
   return p1
}
getGreeting().then((res)=>{console.log(res);
})
