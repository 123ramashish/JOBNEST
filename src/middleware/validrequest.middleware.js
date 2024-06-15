import { body, validationResult } from "express-validator";

const validRequest = async (req, res, next) => {
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Not a valid e-mail address"),
    body("password")
      .isLength({ min: 3})
      .withMessage("Short password!"),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    // Extract the array of error messages from the validation results
    const errors = validationErrors.array().map((error) => error.msg);

    // Return a response with the array of error messages
    return res.status(400).json({ errors });
  }

  next();
};

export default validRequest;
