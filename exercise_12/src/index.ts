  import    express from 'express'
import userRoute from './Routes/user'
  const app = express()
app.use(express.json())


app.use('/users', userRoute )


app.listen(6000, () => {
    console.log("server is running... 6000")
})