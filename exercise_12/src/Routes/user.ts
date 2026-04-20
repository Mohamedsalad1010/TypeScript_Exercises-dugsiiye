import express, { Request, Response, Router }  from 'express'
import { loginUser } from '../controllers/user'
 type productQuery = {
    page?: number,
    limit?:  number
 }

 type productParams = {
    id: string
 }

 type productBody = {
    name: string
    price: number
 }
const router = express.Router()

// 1
router.get('/', loginUser)

// 2
// product roote query
router.get('/products' , (req : Request<{}, {}, {}, productQuery> , res: Response) => {
  const   {page , limit} = req.query
  return res.status(200).json({
    message: `products panigation page: ${page} and limit: ${limit}`
  })
})

// 3
// products update params

router.put('/products/:id' , (req: Request<productParams , {}, productBody>  , res) => {
  const {id} = req.params
  const {name , price} = req.body

  return res.json({
    message: 'product updated.',
    params: {id},
    product: { name , price}
  })
})

export defaul