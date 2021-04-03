"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = __importDefault(require("./helpers/cors"));
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 7000);
// Middlewares
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default(cors_2.default));
// Global variables
// Routes
app.use(require('./app/searcher/infrastructure/SearcherRouter'));
app.use(require('./app/client/infraestructure/clientRouter'));
// Start server
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});
