require("dotenv").config()
let app = require('./app')
const PORT =process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`my server is runing http://localhost:${PORT}`);
})