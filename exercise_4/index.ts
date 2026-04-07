// 1 use interface
interface User {
    userName: string
    password: string
}

function login(user: User){
   console.log(user.userName , user.password)
}

login({userName: 'cali' , password: '1234'})

// 2 using optional properties
interface User1 {
    userName: string
    password: string
    email?: string
}
function login1(user: User1){
   console.log(user.userName , user.password)
}
login1({ userName: 'cali' , password: '1234' , email: '1234'})
login1({userName: 'cali' , password: '1234' })

// 3 readonly properties

interface User2 {
    readonly  id: number
    userName: string
    password: string
    email?: string
}

 const user : User2 = {
    id: 1234,
    userName: 'cali',
    password: '22344'
 }
 