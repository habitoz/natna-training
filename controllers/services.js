const mongoose = require('mongoose')
const Contact = require('../models/contactsmodel')
const validation=require('./validation')
module.exports.getAllContacts = async() => {
    try {
        const contacts = await Contact.find({});
        return {error:'',response:contacts}
    }
    catch (err) {
        console.log(err)
        return {error:err,response:''}
    }
};
module.exports.getContact =async (id) => {
    try {
        const contact = await Contact.findById(id);
        return { error: '', response: contact };
    }
    catch (err) {
        console.log(err);
        return { error: err, response: '' };
    }
};
module.exports.createContact = async(data) => {
    try {
        const { error } = validation(data);
        if(error)return {error:'error',message:error.details[0].message}
        const contact = await Contact.create(data);
        // await contact.save();
        return { error: '', response: contact };
    }
    catch (err) {
        console.log(err);
        return { error: err, response: '' };
    }
};
module.exports.updateContact = async(id,data) => {
    try {
        let contact = await Contact.findByIdAndUpdate(id,data);
        // await contact.save();
        contact = await Contact.findById(id);
        return { error: '', response: contact };
    }
    catch (err) {
        console.log(err);
        return { error: err, response: '' };
    }
};
module.exports.deleteContact = async (id) => {
    try {
        let contact = await Contact.findByIdAndDelete(id);
        // await contact.save();
        return { error: '', response: contact };
    }
    catch (err) {
        console.log(err);
        return { error: err, response: '' };
    }
};