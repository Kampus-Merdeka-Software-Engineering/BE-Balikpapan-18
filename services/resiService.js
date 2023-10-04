const  prisma  = require('../config/prisma');

async function getAllResi() {
    try {
        const resi = await prisma.resi.findMany();

        return resi;
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

// Function to get a user by ID
async function getResiById(resiId) {
    try {
        const resi = await prisma.resi.findUnique({
        where: {
            no_resi: Number(resiId)
        }
        })
        return resi
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {getAllResi,getResiById}
