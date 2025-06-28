import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getOrder = async (req: Request, res: Response): Promise<Response | any> => {
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
        OrderItem: {
          include: {
            product: {
              select: {
                name: true,
              },
            },
          },
        },
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

export const getOrderAll = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const order = await prisma.order.findMany({
      include: {
        user: true,
        OrderItem: {
          include: {
            product: {
              select: {
                name: true,
              },
            },
          },
        },
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

export const detailOrder = async (req: Request, res: Response): Promise<Response | any> => {
  const { userId, orderCode } = req.params;

  try {
    const checkUser = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!checkUser) {
      return res.status(404).json({
        status: 404,
        message: 'user not found',
        data: null,
      });
    }

    const order = await prisma.order.findFirst({
      where: { userId, order_code: orderCode },
      include: {
        OrderItem: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({
      status: 200,
      message: 'success get detailorder',
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
