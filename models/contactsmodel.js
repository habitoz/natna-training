const mongoose=require('mongoose')
const schema=mongoose.Schema;
const contactSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    primaryPhoneNumber: {
        type: String,
        required: true
    },
    phoneNumbers: [{ type: String }],
    email: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
    