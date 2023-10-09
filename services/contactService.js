const prisma = require('../config/prisma');

async function getAllContact() {
    try {
        const contact = await prisma.contact.findMany();

        return contact;
    } catch (error) {
        console.error(error);

        throw new Error();
    }
}

async function createContact(contact) {
    try {
        if (!isValidEmail(email)) {
            throw new Error('Email tidak valid');
        }
        const createdContact = await prisma.contact.create({
            data: {
                name: contact.name,
                email: contact.email,
            },
        });
        return createdContact;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getAllContact,
    createContact,
};
