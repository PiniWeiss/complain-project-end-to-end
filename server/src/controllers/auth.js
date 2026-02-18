import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const loginAdmin = (req, res, next) => {
  const { password } = req.body;

  try {
    if (password === process.env.ADMIN_PASSWORD) {
      const payload = { role: "admin" };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1min",
      });
      res.status(200).json({
        success: true,
        message: "token create",
        token: token,
      });
    } else throw Error
        
  } catch (err) {
    next(err);
  }
};
