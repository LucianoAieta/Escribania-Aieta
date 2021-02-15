"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 7000);
// Middlewares
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
// Global variables
app.use(cors_1.default());
app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    });
    next();
});
// Routes
app.use(require('./app/client/infraestructure/clientRouter'));
// Start server
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});
