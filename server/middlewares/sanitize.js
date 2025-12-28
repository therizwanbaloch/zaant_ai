export const sanitizeInput = (req, res, next) => {
  if (req.body?.message) {
    req.body.message = req.body.message
      .replace(/<script.*?>.*?<\/script>/gi, "")
      .replace(/system prompt|ignore previous|act as/gi, "");
  }
  next();
};
