import jwt, { JwtPayload } from 'jsonwebtoken';

const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(
    token,
    process.env.NEXT_PUBLIC_JWT_SECRET as string
  ) as JwtPayload;
};

export default verifyToken;
