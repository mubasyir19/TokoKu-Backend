import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getCart = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const userId = req.query.userId as string;
    if (!userId) {
      return res.status(400).json({
        status: 400,
        message: 'UserId is required',
        data: null,
      });
    }

    const cartItems = await prisma.cart.findMany({
      where: {
        userId,
      },
    });

    let totalAmount = new Decimal(0);
    cartItems.forEach((item) => {
      totalAmount = totalAmount.plus(item.totalPrice);
    });

    return res.status(200).json({
      status: 200,
      message: 'success get cart items',
      data: {
        totalAmount: totalAmount,
        totalItems: cartItems.length,
        items: cartItems,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed get data',
      data: null,
    });
  }
};

export const addItemCart = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { userId, productId, quantity: reqQuantity } = req.body;

    const checkProduct = await prisma.product.findFirst({
      where: { id: productId },
    });

    if (!checkProduct) {
      return res.status(400).json({
        status: 400,
        message: 'product not found',
        data: null,
      });
    }

    const price = checkProduct.price;
    const quantity = reqQuantity || 1;
    const itemTotalPrice = Number(price) * quantity;

    const existing = await prisma.cart.findUnique({
      where: {
        userId_productId: { userId, productId },
      },
    });
    console.log('ini exist baru', existing);

    if (existing) {
      const newQuantity = existing.quantity + quantity;
      const updated = await prisma.cart.update({
        where: { userId_productId: { userId, productId } },
        data: {
          quantity: existing.quantity + (quantity || 1),
          totalPrice: Number(price) * newQuantity,
        },
      });
      res.json(updated);
    } else {
      const created = await prisma.cart.create({
        data: { userId, productId, quantity: quantity || 1, totalPrice: itemTotalPrice },
      });
      res.json(created);
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed add data',
      data: null,
    });
  }
};
