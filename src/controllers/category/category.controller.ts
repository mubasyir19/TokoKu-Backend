import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getCategories = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const categories = await prisma.categoryProduct.findMany();

    return res.status(200).json({
      status: 200,
      message: 'success get all categories',
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get all categories',
      data: null,
    });
  }
};

export const addCategory = async (req: Request, res: Response): Promise<Response | any> => {
  const { name } = req.body;
  try {
    const newData = await prisma.categoryProduct.create({
      data: {
        name,
      },
    });

    return res.status(201).json({
      status: 201,
      message: 'success add product',
      data: newData,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get produt',
      data: null,
    });
  }
};
