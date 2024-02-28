import mongoose from 'mongoose';
import User  from '../models/User'

export const Login = async (email: any) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return null;
      return user;
    } catch (error) {
      console.error("Error during Authentication:", error);
      throw error;
    }
};