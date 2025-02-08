import { Schema, model } from "mongoose"

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is requried."],
      maxLength: [35, "The name cannot exceed 35 characters."],
    },
    surname: {
      type: String,
      required: [true, "Name is requried."],
      maxLength: [35, "The name cannot exceed 35 characters."],
    },
    username: {
      type: String,
      required: [true, "Username is requried."],
      minLength: [6, "Username needs to be at least 6 characters."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
    },
    email: {
      type: String,
      required: [true, "E-mail is required."],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
    },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN_ROLE", "TEACHER_ROLE", "STUDENT_ROLE"],
    },
    status: {
      type: Boolean,
      default: true,
    },

    enrolledCourses: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Course",
        },
      ],
      validate: [courseLimit, "You aren't allowed to enroll to more than 3 courses."],
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
)

userSchema.methods.toJSON = function () {
  const { password, _id, ...user } = this.toObject()
  user.uid = _id
  return user
}

function courseLimit(val) {
  return val.length <= 3
}

export default model("User", userSchema)
