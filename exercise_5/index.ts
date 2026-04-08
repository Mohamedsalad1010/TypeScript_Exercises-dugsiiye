//  1 echo function with generic

 function echo<T>(input: T) : T {
    return input
 }


 const myName = echo('maxamed')
 console.log(myName.toUpperCase())
 const  age = echo(20)
 console.log(age)

 const User = echo({name: 'faarax', age: 20})
 console.log(User)

//  arrays
const itemsArray = echo(['apple', 'tomato'])
console.log(itemsArray)

// generic interface
 interface apiResponse<T>{
    status: string;
    data: T
 }

 const stringApiResponse : apiResponse<string> ={
    status: 'success',
    data: 'Done'
 }
console.log(stringApiResponse)

const apiResult : apiResponse<{id: number,name: string , age: number}> ={
    status: 'success',
    data: {id:1 , name: 'faatax', age: 30}
}
console.log(apiResult)

// 3 firstElement 

function firstItem<T> (items: T[]) : T{
    return items[0]
}

const strinArray  = firstItem<string>(['apple', 'mango'])
console.log(strinArray)

const numberArray = firstItem<number>([12, 13, 15, 30])
console.log(numberArray)
 const students = firstItem<{id: number, name: string , age: number}>([{id: 12,name: "caasho" , age: 20}])

 console.log(students)