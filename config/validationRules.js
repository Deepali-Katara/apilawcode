const { check } = require('express-validator');
exports.form=[
  // first Name validation
  check('name').trim().notEmpty().withMessage(' Name required')
  .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),

 // last Name validation
//   check('lastName').notEmpty().withMessage('Last Name required')
//   .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),
 
   //contact number validation
   check("contact").notEmpty().withMessage("Contact Number Required")
   .isLength({min:10,max:10}).withMessage("Contact Number should be 10 digits").matches(/\d{10}$/).withMessage("Enter only numbers"),


  // email address validation
  check('email').notEmpty().withMessage('Email Address required').normalizeEmail().isEmail().withMessage('must be a valid email'),
  
  // password validation
  check('password').trim().notEmpty().withMessage('Password required')
  .isLength({ min: 8 }).withMessage('password must be minimum 8 length')
  .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
  .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
  .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
//   .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
  .not().matches(/^$|\s+/).withMessage('White space not allowed'),
  
  // confirm password validation
  check('cpassword').custom((value, { req }) => {
       if (value !== req.body.password) {
             throw new Error('Password Confirmation does not match password');
        }
        return true;
   })
]

exports.resetform=[
  // password validation
  check('password').trim().notEmpty().withMessage('Password required')
  .isLength({ min: 8 }).withMessage('password must be minimum 8 length')
  .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
  // .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
  .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
//   .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
  .not().matches(/^$|\s+/).withMessage('White space not allowed'),
  
  // confirm password validation
  check('cpassword').custom((value, { req }) => {
       if (value !== req.body.password) {
             throw new Error('Password Confirmation does not match password');
        }
        return true;
   })
]
exports.contactus=[
  
  check("name").notEmpty().withMessage("Name Required").isLength({max:25}).withMessage("Name not more than 25 Characters "),
  check("email").notEmpty().withMessage("Email Required").normalizeEmail().isEmail().withMessage("Please Enter valid email"),
  
  check("phone").notEmpty().withMessage("Phone Number required")
  .isLength({min:10,max:10}).withMessage("Phone must contain only 10 digits")
  .matches(/\d{10}$/).withMessage("Enter only digits"),
]
exports.updateaccount=[
  check("name").notEmpty().withMessage("Name Required").isLength({max:25}).withMessage("Name not more than 25 Characters "),
  check("phone").notEmpty().withMessage("Phone Number required")
  .isLength({min:10,max:10}).withMessage("Phone must contain only 10 digits")
  .matches(/\d{10}$/).withMessage("Enter only digits"),
]

exports.changepassword=[
  check('oldpassword').trim().notEmpty().withMessage('Old Password required'),
  // .isLength({ min: 8 }).withMessage('password must be minimum 8 length')
  // .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
  // .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
  // .not().matches(/^$|\s+/).withMessage('White space not allowed'),

  check('newpassword').trim().notEmpty().withMessage('New Password required')
  .isLength({ min: 8 }).withMessage('password must be minimum 8 length')
  .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
  .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
  .not().matches(/^$|\s+/).withMessage('White space not allowed'),
  
  // confirm password validation
  check('cnewpassword').trim().notEmpty().withMessage('Confirm Password required'),

  check('cnewpassword').custom((value, { req }) => {
       if (value !== req.body.newpassword) {
             throw new Error('Password Confirmation does not match password');
        }
        return true;
   })
]