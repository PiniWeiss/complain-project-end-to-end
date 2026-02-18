import jwt from "jsonwebtoken";

export const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied: no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};

