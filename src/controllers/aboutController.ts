import AboutModel from "../models/about";
import { Request, Response } from "express";

export const getAbout = async (req: Request, res: Response) => {
    try {
        const about = await AboutModel.find();
        res.json(about);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching about', error });
    }
};

export const postAbout = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, title_first, title_second } = req.body;

    const newAbout = new AboutModel({
      firstName,
      lastName,
      title_first,
      title_second,
    });

    await newAbout.save();

    res.status(201).json(newAbout);
  } catch (error) {
    res.status(500).json({ message: 'Error creating about', error });
  }
};