import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string,
  email: string
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload // `?` meaning is, May not defined or may defined
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) { // !req.session?.jwt === (!req.session && !req.session.jwt)
    return next(); // next middleware run or return
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!  // process.env.JWT_KEY skip error of process.env not undefined
    ) as UserPayload;
    req.currentUser = payload;
  } catch (error) { }

  next(); // next middleware run or return
};
