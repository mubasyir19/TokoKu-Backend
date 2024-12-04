import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const products = await prisma.product.findMany();

    return res.status(200).json({
      status: 200,
      message: 'success get all products',
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get all products',
      data: null,
    });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<Response | any> => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'success get product',
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get produt',
      data: null,
    });
  }
};

export const addProduct = async (req: Request, res: Response): Promise<Response | any> => {
  const { name, categoryId, description, price, stock, photo } = req.body;
  try {
    const newData = await prisma.product.create({
      data: {
        name,
        categoryId,
        description,
        price,
        stock,
        photo,
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

export const searchProduct = async (req: Request, res: Response): Promise<Response | any> => {
  const { query } = req.params;
  try {
    const result = await prisma.product.findMany({
      where: {
        OR: [{ name: query }, { description: query }],
      },
    });

    if (result.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'product not found',
        data: null,
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'success get product',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get data',
      data: null,
    });
  }
};

export const productByCategory = async (req: Request, res: Response): Promise<Response | any> => {
  const { category } = req.params;
  try {
    const result = await prisma.categoryProduct.findMany({
      where: {
        name: category,
      },
      include: {
        Product: true,
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'success get products by category',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get data',
      data: null,
    });
  }
};
