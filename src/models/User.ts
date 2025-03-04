import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  role: "student" | "teacher";
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], required: true },
});

export default mongoose.model<IUser>("User", UserSchema);
