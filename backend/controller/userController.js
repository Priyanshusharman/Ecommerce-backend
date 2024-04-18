const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken")
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "this is a sample id",
            url: "profilepicurl"
        }
    });
    
    sendToken(user,201,res);
})

//login 
exports.loginuser = catchAsyncErrors(async(req,res,next)=>{
    const {email, password} = req.body;

    //check emailid and password both are give
    if(!email || !password){
        return(next(new ErrorHandler("invalid password and email",400)))
    }

    const user = await User.findOne({email}).select("+password");;
    if(!user){
        return(next(new ErrorHandler("User not found",401)))
    }
    
    const ispasswordMatch =await user.comparePassword(password);
    if(!ispasswordMatch){
        return(next(new ErrorHandler("Wrong password",402)))
    }

    sendToken(user,201,res);
}) 