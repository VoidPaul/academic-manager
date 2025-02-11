import { body, param } from "express-validator"
import { courseExists } from "../helpers/db-validator.js"
import { validateFields } from "./validate-fields.js"
import { handleErrors } from "./error-handler.js"

export const createCourseValidator = [body("name"), body("description"), body("email")]

export const getCourseByIdValidator = []

export const updateCourseValidator = []

export const deleteCourseValidator = []
