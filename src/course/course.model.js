import { Schema, model } from "mongoose"

const courseSchema = Schema({
  name: {
    type: String,
    required: [true, "Course name is required."],
  },
  description: String,
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Course teacher is required."],
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
})

export default model("Course", courseSchema)
