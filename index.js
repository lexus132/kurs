const express = require('express');
const port = 5000;

const app = express();

app.get('/', (req,resp)=>{
    resp.status(200).json({
        message : 'Worked'
    });
});

app.listen(port, () => console.log( `-- Server start on ${ port } port` ) );