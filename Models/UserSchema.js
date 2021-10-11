const Mongoose  = require("mongoose");
const bcrypt=require("bcryptjs");

const UserSchema=new Mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    EmailId:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Isblock:{
        type:Boolean,
        required:true
    },
    Token:{
        type:Number,
        required:true
    }
})
UserSchema.pre("save",async function(next){
    console.log("Presave function called")
    if(this.isModified("Password")){
        this.Password=await bcrypt.hash(this.Password,12)
    }
    next()
})
const User=Mongoose.model("userDetails",UserSchema);
module.exports=User