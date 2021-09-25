"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WilderControl = require('../controllers/WilderControllers');
const router = (0, express_1.Router)();
router.post('/api/wilder/create', WilderControl.create);
router.get('/api/wilder/retrieve/:id', WilderControl.retrieve);
router.put('/api/wilder/update/:id', WilderControl.update);
router.delete('/api/wilder/delete/:id', WilderControl.delete);
exports.default = router;
//# sourceMappingURL=routes.js.map