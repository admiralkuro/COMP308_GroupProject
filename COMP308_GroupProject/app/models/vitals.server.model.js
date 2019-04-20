// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const VitalsSchema = new Schema({
    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: "Select a patient"
    },
    bodyTemperature: {
        type: Number,
        required: "Required"
    },
    heartRate: {
        type: Number,
        required: "Required"
    },
    bloodPressure: {
        type: String,
        required: "Required"
    },
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('VitalSigns', VitalsSchema);