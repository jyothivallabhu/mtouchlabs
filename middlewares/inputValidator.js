const {body, validationResult}   = require('express-validator')



exports.validateStudent = [
    body("name").notEmpty().withMessage("Name is required"),
    body("age").isInt({ gt: 0 }).withMessage("Age must be a positive integer"),
    body("rollNumber").isInt({ gt: 0 }).withMessage("Roll number must be a number"),
    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

