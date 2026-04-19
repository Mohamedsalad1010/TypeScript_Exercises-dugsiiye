 import express from 'express'
import { goodBy } from '../controller/goodBy'

 const router = express.Router()

router.get('/', goodBy)


 export default router