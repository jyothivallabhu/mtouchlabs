const mongoose = require('mongoose');
const studentsSchema = new mongoose.Schema({
    name:{type : 'string',required: true},  
    age : {type : 'number',required: true},
    className : {type : 'string',required: true},
    section: {type : 'string'},
    rollNumber: {type : 'number',required: true,unique: true},
    photo : {type : 'string'}
},{
    timestamps: true,
}
)

module.exports = mongoose.model('Student', studentsSchema);