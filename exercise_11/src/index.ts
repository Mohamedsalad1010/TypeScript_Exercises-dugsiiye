 import express from 'express'
 import goodByRouter from './Routes/gooby'
const app = express()
app.use(express.json())

app.use('/goodby', goodByRouter )


app.listen(3000 , () => {
    console.log('server is running....')
})