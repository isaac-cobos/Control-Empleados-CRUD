const express =  require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const app = express();

const { mongoose } = require('./database');

//Settings (configuracion del server del puerto)
app.set('port', process.env.PORT || 3000); 

//Middlewares (procesa los datos)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Routes(rutas del servidor)
app.use('/api/employees' ,require('./routes/employee.routes'));

//Starting the server 
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));  
 });
  