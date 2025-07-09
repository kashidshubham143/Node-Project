let app = require("./src/app.js")

app.listen(process.env.db_server,()=>{
    console.log("Server Started..."); 
})