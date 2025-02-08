import User from "../user/user.model.js"
import Course from "../course/course.model.js"

export const emailExists = async (email = "") => {
  const exists = await User.findOne({ email })
  if (exists) {
    throw new Error(`E-mail ${email} already exists.`)
  }
}

export const usernameExists = async (username = "") => {
  const exists = await User.findOne({ username })
  if (exists) {
    throw new Error(`Username ${username} already exists.`)
  }
}

export const userExists = async (uid = "") => {
  const exists = await User.findOne(uid)
  if (!exists) {
    throw new Error("User doesn't exist.")
  }
}

export const courseExists = async (id = "") => {
  const exists = await Course.findOne(id)
  if (exists) {
    throw new Error("Course already exists.")
  }
}
