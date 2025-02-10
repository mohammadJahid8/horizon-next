import * as jose from 'jose';

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
};

export const isAuthenticated = async (token: string) => {
  // let token = req.headers.get('authorization') || req.headers.get('Authorization')

  if (token) {
    try {
      const decoded = await jose.jwtVerify(token, jwtConfig.secret);
      // console.log('🚀 ~ isAuthenticated ~ decoded:', decoded);

      if (decoded.payload?.email) {
        return decoded.payload;
      } else {
        return false;
      }
    } catch (err) {
      console.error('isAuthenticated error: ', err);

      return false;
    }
  } else {
    return false;
  }
};
