"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home Page' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me' });
});
exports.default = router;
//# sourceMappingURL=index.js.map