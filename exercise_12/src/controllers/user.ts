 import { Request , Response}  from 'express'
import { userLoginBody } from '../types/userLoginBody'


export  const loginUser = (req: Request<{}, {}, userLoginBody> , res: Response) =>{
const {email , password} = req.body
if(!email || !password){
    return res.status(400).json({
        message: 'all  fields are need,'
    })
    
}




return res.status(200).json({
        message: ` welcome back user ${email}`
    })
}
