"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = __importDefault(require("../api"));
const router = (0, express_1.Router)();
//#region Api
router.use('/api', api_1.default);
//#endregion
//#region Landing
router.use('/', (req, res) => {
    res.send('<h1> You are in Landing! </h1>');
});
//#endregion
exports.default = router;
