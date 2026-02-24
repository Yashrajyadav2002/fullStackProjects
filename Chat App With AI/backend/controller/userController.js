import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js"

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    // 1️⃣ password match check
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 2️⃣ email already exists check
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 3️⃣ create new user

    // Hasing the password
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await new User({
      name,
      email,
      password:hashedPassword ,
    });

    await newUser.save()
    if(newUser) {
      createTokenAndSaveCookie(newUser._Id,res);
      res.status(201)
      .json({message: "user registered successfully", newUser })
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req,res)=>{

  try {
    const {email, password } = req.body;
    const user = await User.findOne({email})
    const isMatch = await bcrypt.compare(password, user.password)
    if (!user || !isMatch) {
      return res.status(404).json({message: " invalid User or password "})
    }

    createTokenAndSaveCookie(newUser._Id,res);
    res.status(201).json({
      message:"user login successfully ! ",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}