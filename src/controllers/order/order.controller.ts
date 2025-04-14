import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const checkoutCart = async (req: Request, res: Response): Promise<Response | any> => {
  const { userId, address, phoneNumber, methodPayment, items, price } = req.body;
  try {
    if (!userId || !items || items.length === 0 || !price) {
      return res.status(400).json({
        status: 400,
        message: 'Data tidak lengkap',
        data: null,
      });
    }

    const order = await prisma.order.create({
      data: {
        dateOrder: new Date(),
        userId,
        address,
        phoneNumber,
        methodPayment,
        price,
        OrderItem: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            subTotal: item.subTotal,
          })),
        },
      },
      include: {
        OrderItem: true,
      },
    });

    await prisma.cart.deleteMany({
      where: { userId },
    });

    return res.status(201).json({
      status: 201,
      message: 'success checkout',
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed checkout',
      data: null,
    });
  }
};
