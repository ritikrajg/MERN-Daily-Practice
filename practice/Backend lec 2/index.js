const express=require('express')
const connectDB=require('./database/db')
const cors=require('cors')
const todoRoutes=require('./routes/todoRoutes')
const app=express()

app.use(cors())
app.use(express.json())

connectDB();
app.use('/api/v1',todoRoutes)

const PORT=5000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))