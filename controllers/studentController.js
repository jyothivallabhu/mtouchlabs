const Student = require('../models/Student')
exports.getStudents =  async(req,res)=>{
    const {page = 1 , limit =10}= req.query;
    const student = await Student.find().limit(limit*1).skip(page-1)*limit;
    res.json(student);
}
exports.getStudentsById = async(req,res)=>{
    const student = await Student.findById(req.params.id);
    if(!student) return res.status(404).json({msg: 'Student not found'});
    res.json(student);
}