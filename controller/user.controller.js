const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Creating User
exports.create = (req, res, next) => {
  // Object Destructuring
  const { fname, lname, email, password } = req.body;
  UserModel.create(
    {
      fname,
      lname,
      email,
      password,
    },
    (err, result) => {
      if (err) next(err);
      else
        res.status(200).json({
          status: "Success",
          message: "User Added Successfully",
          data: result,
        });
    }
  );
};

// Login User
exports.login = (req, res, next) => {
  UserModel.findOne({ email: req.body.email },
    (err, result) => {
        if(err){
            next(err);
        }
        else{
            // bcrypt to compare the password(mongodb in hasheway) 
            // with the password sending from req.body
            if(bcrypt.compare(req.body.password, result.password)){
                // Generating the security token
                // Sign Function
                // Parameters
                // 1. Id
                // 2. secret key
                // 3. how much time that security token needs to valid
                const token = jwt.sign({id:result._id},req.app.get('secretKey'), {expiresIn:'1h'})
                // Sending the response from the server to the user
                res.status(200).json({
                    status: "Success",
                    message: "User Logged in Successfully",
                    data: {
                        user: result,
                        token: token
                    }
                })
            }
        }
  });
};
