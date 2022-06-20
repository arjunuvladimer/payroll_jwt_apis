const router = require('express').Router()
const controller = require('../controller/employee.controller')

// Create Employee
router.post('/create', controller.create)

// Get All Employee
router.get('/getAll', controller.read)

// Read By Id
router.get('/getById/:id', controller.findByEmployeeId)

// Read By Field
router.post('/getByField', controller.findByEmployeeField)

// Update Employee
router.put('/updateById/:id', controller.findByEmployeeIdandUpdate)

// Delete Employee By Id
router.delete('/deleteById/:id', controller.deleteEmpById)

module.exports = router