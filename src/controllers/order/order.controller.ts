import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getOrrder = async (req: Request, res: Response): Promise<Response | any> => {
  const { userId } = req.params;
  try {
    if (!userId) {
      return res.status(400).json({
        status: 400,
        message: 'UserId is required',
        data: null,
      });
    }

    const order = await prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
        OrderItem: true,
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'success get order',
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get data',
      data: null,
    });
  }
};
