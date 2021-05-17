const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); //Para permitir o uso do slug

mongoose.connect(process.env.MONGO_URL_CONNECT, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    
    () =>{
        console.log("Conectado ao MongoDB");
    })