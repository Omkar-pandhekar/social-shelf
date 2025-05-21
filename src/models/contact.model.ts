import mongoose, { models, model, Schema } from "mongoose";

export interface IContact {
  _id?: mongoose.Types.ObjectId;
  fullname: string;
  email: string;
  phoneno: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userContact = new Schema<IContact>(
  {
    fullname: {
      type: String,
      required: [true, "Please Provide a name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide a email"],
      unique: true,
    },
    phoneno: {
      type: String,
      required: [true, "Please Provide a phone number"],
      unique: true,
    },
    message: {
      type: String,
      required: [true, "Please provide a message !"],
    },
  },
  { timestamps: true }
);

const Contact = models?.contacts || model<IContact>("contact", userContact);

export default Contact;
