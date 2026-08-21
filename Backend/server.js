const dns = require('dns')
dns.setServers(['8.8.8.8' ,'8.8.8.8'])

const dotenv = require('dotenv')
dotenv.config()
const connectDB =require('./src/config/db')
connectDB()
const app =require('./src/app')
 
app.listen(5000 ,()=>{
    console.log('server is running on port 5000')
})