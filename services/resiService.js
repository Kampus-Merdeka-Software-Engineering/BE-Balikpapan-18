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

async function createResi(resi) {
    try {
        const createdResi = await prisma.resi.create({
            data: {
                no_resi         :resi.no_resi,
                name            :resi.name,
                alamat          :resi.alamat,
                email           :resi.email,
                nama_barang     :resi.nama_barang,
                origin          :resi.origin,
                destination     :resi.destination,
                weight          :resi.weight,
                courier         :resi.courier,
            }
        })
        return createdResi;
    } catch (error) {
        throw new Error(error)
    }
}

// Function to get a user by ID
async function getResiById(resiId) {
    try {
        const resi = await prisma.resi.findUnique({
            where: {
                id: Number(resiId)
            }
        })
        return resi
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {getAllResi,createResi,getResiById}
