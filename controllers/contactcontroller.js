const contactService = require('../services/contactService');

async function getcontact(req, res) {
    const contact = await contactService.getAllContact();

    res.status(200).json(contact);
}

async function createContact(req, res) {
    try {
        const contactId = await contactService.createContact(req.body);
        res.status(201).json({ contactId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getcontact,
    createContact,
};
