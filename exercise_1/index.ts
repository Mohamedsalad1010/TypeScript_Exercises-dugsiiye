// 1 productname has string
let productName: string = 'sumsangA12'
 let price: number = 100
 let disAccountAvaliable: boolean = true

//  2
 function getDiscount (price: number , discount : number) : number {
    return price - price*discount 
 }
console.log( getDiscount(100 , 0.2))



//  3
 function printLength(x: unknown){
if(typeof x === 'string'){
    console.log('latter ' , x)
    console.log('latter length:' , x.length)
}
if(typeof x === 'number'){
    console.log('number 2 digit', x.toFixed(2))
}
 }

 printLength('hello')
 printLength(1234)


