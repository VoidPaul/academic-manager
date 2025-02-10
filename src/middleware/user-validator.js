import { body, param } from "express-validator"
import { emailExists, usernameExists, userExists } from "../helpers/db-validator.js"
import { validateFields } from "./validate-fields.js"
import { handleErrors } from "./error-handler.js"

export const registerValidator = [
  body("name", "Name required").notEmpty(),
  body("username", "Username required.").notEmpty(),
  body("username", "Username already in use.").custom(usernameExists),
  body("email", "Valid e-mail required.").isEmail(),
  body("email", "E-mail already in use.").custom(emailExists),
  body("password", "W E A K   P A S S W O R D").isStrongPassword({ minSymbols: 0 }),
  validateFields,
  handleErrors,
]

export const loginValidator = [
  body("email", "Invalid e-mail.").optional().isEmail(),
  body("username", "Invalid username format.").optional().isString(),
  body("password", "Invalid password length.").isLength({ min: 8 }),
  validateFields,
  handleErrors,
]

export const getUserByIdValidator = [
  param("uid", "Invalid MongoDB ID.").isMongoId(),
  param("uid", "User doesn't exist.").custom(userExists),
  validateFields,
  handleErrors,
]

export const updateUserValidator = [
  param("uid", "Invalid MongoDB ID.").isMongoId(),
  param("uid", "User doesn't exist.").custom(userExists),
  validateFields,
  handleErrors,
]

export const updatePasswordValidator = [
  param("uid", "Invalid MongoDB ID.").isMongoId(),
  param("uid", "User doesn't exist.").custom(userExists),
  body("newPassword", "Password must be at least 8 characters.").isLength({ min: 8 }),
  validateFields,
  handleErrors,
]

export const deleteUserValidator = [
  param("uid", "Invalid MongoDB ID.").isMongoId(),
  param("uid", "User doesn't exist.").custom(userExists),
  validateFields,
  handleErrors,
]
