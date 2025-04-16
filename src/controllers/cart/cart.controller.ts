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
      include: {
        product: true,
        user: true,
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

    if (!userId || !productId || typeof reqQuantity !== 'number') {
      return res.status(400).json({
        status: 400,
        message: 'invalid request',
        data: null,
      });
    }

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

    if (existing) {
      const newQuantity = existing.quantity + quantity;
      const updated = await prisma.cart.update({
        where: { userId_productId: { userId, productId } },
        data: {
          quantity: existing.quantity + (quantity || 1),
          totalPrice: Number(price) * newQuantity,
        },
      });

      return res.status(200).json({
        status: 200,
        message: 'success update product cart',
        data: updated,
      });
    } else {
      const created = await prisma.cart.create({
        data: { userId, productId, quantity: quantity || 1, totalPrice: itemTotalPrice },
      });
      return res.status(201).json({
        status: 201,
        message: 'success add product to cart',
        data: created,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed add data',
      data: null,
    });
  }
};

export const updateItemCart = async (req: Request, res: Response): Promise<Response | any> => {
  const { userId, productId, quantity } = req.body;
  try {
    if (!userId || !productId || typeof quantity !== 'number') {
      return res.status(400).json({
        status: 400,
        message: 'invalid request',
        data: null,
      });
    }

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

    const newTotalPrice = Number(checkProduct?.price) * quantity;

    const updatedCart = await prisma.cart.update({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      data: {
        quantity,
        totalPrice: newTotalPrice,
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'success add product to cart',
      data: updatedCart,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed add data',
      data: null,
    });
  }
};

export const removeItemCart = async (req: Request, res: Response): Promise<Response | any> => {
  const { idCart } = req.body;
  try {
    const remove = await prisma.cart.delete({
      where: {
        id: idCart,
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'success remove item cart',
      data: remove,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'failed remove data',
      data: null,
    });
  }
};
