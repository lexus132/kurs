const app = require('./app');
const port = process.env.PORT || 5000;


// app.get('/', (req,resp)=>{
//     resp.status(200).json({
//         message : 'Worked'
//     });
// });



app.listen(port, () => console.log( `-- Server start on ${ port } port` ) );