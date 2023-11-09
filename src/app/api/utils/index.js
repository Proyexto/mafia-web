import jwt from "jsonwebtoken";

export const getSecretKey = () => {
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    console.error(
      "ERROR: La variable de entorno JWT_SECRET no está configurada."
    );
    process.exit(1); // Termina la aplicación con un código de salida no exitoso
  }

  return secretKey;
};

export const generateToken = (userId) => {
  const secretKey = getSecretKey();
  const token = jwt.sign({ userId }, secretKey, { expiresIn: "8h" });
  return token;
};

export const generateTemporalToken = (userId) => {
  const secretKey = getSecretKey();
  const token = jwt.sign({ userId }, secretKey, { expiresIn: "15m" });
  return token;
};

export const verifyToken = (token) => {
  try {
    const secretKey = getSecretKey();
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error("Error al verificar el token:", error.message);
    return null;
  }
};
