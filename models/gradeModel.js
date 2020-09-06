import mongoose from 'mongoose';

//Models
const gradeSchema = mongoose.Schema({

    name: { type: String, require: true },
    subject: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: Number, require: true, min: 0 },   
    lastModfied: { type: Date, require: true, default: Date.now}, 

})

const gradeModel = mongoose.model('desafio', gradeSchema, 'desafio')

export { gradeModel }