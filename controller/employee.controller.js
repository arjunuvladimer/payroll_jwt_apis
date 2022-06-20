const EmpModel = require('../model/employee.model')

// Create Employee
const create = (req,res,next) => {
    const {fname, lname, email, address, salary} = req.body

    EmpModel.create({
        fname,
        lname,
        email,
        address,
        salary
    }, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Registered the Employee",
            data: result
        })
    })
}

// Read all the Employees
const read = (req,res,next) => {
    EmpModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Retrieved All the Employees",
            data: result
        })
    })
}

// Read By Field
const findByEmployeeField = (req,res,next) => {
    EmpModel.findOne(req.body, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Retrieved By the field",
            data: result
        })
    })
}

// Read By Id
const findByEmployeeId = (req,res,next) => {
    EmpModel.findOne({_id:req.params.id}, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Retrieved By the Employee Id",
            result
        })
    })
}

// Update Employee By Id
const findByEmployeeIdandUpdate = (req,res,next) => {
    EmpModel.findByIdAndUpdate({_id:req.params.id},req.body, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Updated By the Employee Id",
            data: result
        })
    })
}

// Delete an Employee By Id
const deleteEmpById = (req,res,next) => {
    EmpModel.deleteOne({_id:req.params.id},(err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Deleted Employee by the Employee Id",
            data: result
        })
    })
}

module.exports = {create, read, findByEmployeeId, findByEmployeeField, findByEmployeeIdandUpdate, deleteEmpById}
