import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = async (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn: "5d",
    });
    res.cookie("jwt",token,{
        httpOnly: true, // xss Attack save 
        secure: true,
        sameSite: "strict", // csrf Attack protackter
    })

}

export default createTokenAndSaveCookie;