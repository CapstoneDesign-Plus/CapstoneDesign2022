"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * Api 진입점
 */
router.get('/', (req, res) => {
    res.send('<h1> Hello! You are in API! </h1>');
});
exports.default = router;
