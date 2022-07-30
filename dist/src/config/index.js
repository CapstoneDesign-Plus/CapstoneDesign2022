"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = {
    NODE_ENV: (process.env.NODE_ENV || 'development'),
    DB_URL: process.env.DB_URL || 'localhost',
    HOST: process.env.HOST || 'localhost',
    PORT: parseInt(process.env.PORT || '0')
};
exports.default = env;
