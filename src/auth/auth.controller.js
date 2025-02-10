import { hash, verify } from "argon2"
import User from "../user/user.model.js"
import { generateJWT } from "../helpers/generate-jwt.js"

export const register = async (req, res) => {
  try {
    const data = req.body

    const encryptedPassword = await hash(data.password)

    data.password = encryptedPassword

    const user = await User.create(data)

    return res.status(200).json({
      message: "User registered.",
      name: user.name,
      email: user.email,
    })
  } catch (err) {
    return res.status(500).json({
      message: "User registration failed.",
      error: err.message,
    })
  }
}

export const login = async (req, res) => {
  const { email, username, password } = req.body
  try {
  } catch (err) {
    return res.status(500).json({
      message: "User registration failed.",
      error: err.message,
    })
  }
}
