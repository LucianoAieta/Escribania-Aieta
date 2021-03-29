import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app: Application = express();

// Settings
app.set('port', process.env.PORT || 7000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Global variables
app.use(cors());
app.use((req, res, next) => {
	res.header({
		'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
	});
	next();
});

// Routes
app.use(require('./app/searcher/infrastructure/SearcherRouter'));
app.use(require('./app/client/infraestructure/clientRouter'));

// Start server
app.listen(app.get('port'), () => {
	console.log('server on port: ', app.get('port'));
});
