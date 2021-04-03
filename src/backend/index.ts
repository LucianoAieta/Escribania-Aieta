import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import corsOptions from './helpers/cors';
const app: Application = express();

// Settings
app.set('port', process.env.PORT || 7000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

// Global variables

// Routes
app.use(require('./app/searcher/infrastructure/SearcherRouter'));
app.use(require('./app/client/infraestructure/clientRouter'));

// Start server
app.listen(app.get('port'), () => {
	console.log('server on port: ', app.get('port'));
});
