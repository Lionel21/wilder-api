"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WilderModel = require('../models/WilderModel');
module.exports = {
    create: async (req, res) => {
        const { name, city, skills } = req.body;
        await WilderModel.init();
        const wilder = new WilderModel({
            name,
            city,
            skills,
        });
        const result = await wilder.save();
        res.status(201).json({
            success: true,
            result
        });
    },
    retrieve: async (req, res) => {
        const { id } = req.params;
        const result = await WilderModel.findById(id);
        res.status(201).json({
            success: true,
            result
        });
    },
    update: async (req, res) => {
        const { name, city, skills } = req.body;
        const { id } = req.params;
        if (!req.body) {
            return res.send({
                message: `Data to update can not be empty!`
            });
        }
        const result = await WilderModel.findByIdAndUpdate(id, {
            name,
            city,
            skills
        });
        res.status(201).json({
            success: true,
            result
        });
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await WilderModel.findByIdAndRemove(id);
        res.status(201).json({
            success: true
        });
    },
};
//# sourceMappingURL=WilderControllers.js.map