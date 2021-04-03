"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = ['http://127.0.0.1:5500', 'https://lucianoaieta.github.io', 'http://localhost:5500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1)
            callback(null, true);
        else
            callback(new Error('Not allowed by CORS'));
    },
};
exports.default = corsOptions;
