import jwt from "jsonwebtoken";
import { configs } from "../configs";

export const generateUniqueToken = (
  id:string,
  email: string,
  name: string,
  role: string,
)=>{
  const payload = {
    id,
    email,
    name,
    role
  };

  const options = {
    expiresIn: "7d"
  };
  const token = jwt.sign(payload,configs.JWT_SECRET as string, options)
  return token
}