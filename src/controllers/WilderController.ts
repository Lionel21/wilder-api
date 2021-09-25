import { Request, Response } from 'express';

const WilderModel = require('../models/WilderModel');

module.exports = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const { name, city, skills } = (req.body as { name: string, city: string, skills: [string, number] });
    await WilderModel.init();
    const wilder = new WilderModel({
      name,
      city,
      skills,
    });
    const result = await wilder.save();
    return res.status(200).json({
      success: true,
      result,
    });
  },

  retrieve: async (req: Request, res: Response): Promise<Response> => {
    const { id } = (req.params as { id: string, name: string });
    try {
      const wilderRetrieved = await WilderModel.findById(id);
      return res.status(200).json({
        success: true,
        data: wilderRetrieved,
      });
    } catch (err: any) {
      return res.status(404).send(err.message);
    }
  },

  update: async (req: Request, res: Response): Promise<Response> => {
    const { name, city, skills } = (req.body as { name: string, city: string, skills: [string, number] });
    const { id } = req.params;

    if (!req.body) {
      return res.send({
        message: `Data to update cannot be empty!`,
      });
    }

    const wilderToUpdate: any = await WilderModel.findByIdAndUpdate(id, {
      name,
      city,
      skills,
    });
    
    return res.status(200).json({
      success: true,
      data: wilderToUpdate,
    });
  },

  delete: async (req: Request, res: Response): Promise<Response> => {
    const { id } = (req.params as { id: string });
    try {
      await WilderModel.findByIdAndRemove(id);
      return res.status(200).json({
        status: 'success',
        message: `The wilder has been deleted successfully!`,
      });
    } catch (err: any) {
      return res.status(404).send(err.message);
    }
  },

};
