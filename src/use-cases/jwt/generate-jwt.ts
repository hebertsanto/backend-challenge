import jwt, { SignOptions } from 'jsonwebtoken';


interface  User{
  id : string;
  email : string;
}

interface GenerateTokenReturnType {
  token: string;
}
export class JwtService {
  public  async  generatejwt(payload : User) : Promise<GenerateTokenReturnType> {
    const options: SignOptions  = { expiresIn: '1d' };
    const token : string =  jwt.sign(payload, process.env.SECRET_JWT as string, options);

    return  {
      token
    };
  }
}
