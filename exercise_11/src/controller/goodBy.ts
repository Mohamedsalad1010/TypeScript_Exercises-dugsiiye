  import { Request , Response} from 'express'

  export const goodBy = (req: Request , res:Response) => {
      const name = req.query.name

      if(typeof name !== 'string'){
        res.status(400).json({
            message: 'name must be a  string'
        })
      }
      return res.status(200).json({
        message: `fareWell: GoodBy , ${name}`
      })
  }
