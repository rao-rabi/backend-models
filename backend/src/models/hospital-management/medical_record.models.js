import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        lowercase : true,
    },
    patientAssociated  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
    },
}, { timestamps: true });

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);