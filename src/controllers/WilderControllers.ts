import { Request, Response } from 'express';

const WilderModel = require('../models/WilderModel');

module.exports = {
    create: async (req: Request, res: Response): Promise<Response> =>  {
        const { name, city, skills } = (req.body as {name: string, city: string, skills: [string, number]});
            await WilderModel.init();
            const wilder = new WilderModel({
                name,
                city,
                skills,
            });
            const result = await wilder.save();
            return res.status(201).json({
                success: true, 
                result
            });
        },

    retrieve: async (req: Request, res: Response): Promise<Response> => {
        const { id } = (req.params as { id: string });
        const result = await WilderModel.findById(id);
        return res.status(201).json({
            success: true,
            result
        });
    },

    update: async (req: Request, res: Response): Promise<Response> => {
        const { name, city, skills } = (req.body as {name: string, city: string, skills: [string, number]});
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
            return res.status(201).json({
                success: true,
                result
            });
    },

    delete: async (req: Request, res: Response): Promise<Response> => {
        const { id } = (req.params as {id: string});
        await WilderModel.findByIdAndRemove(id);

        return res.status(201).json({
            success: true
        });
    },

};
