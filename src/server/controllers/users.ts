import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { User, UserDocument } from '../models/users';

export const getAllUser = asyncHandler(async(req: Request, res: Response): Promise<void> => {
  try {
    const userList: UserDocument[] = await User.find()
    res.status(200).json({ users: userList })
    return
  } catch (error: any) {
    throw new Error(error)
  }
});