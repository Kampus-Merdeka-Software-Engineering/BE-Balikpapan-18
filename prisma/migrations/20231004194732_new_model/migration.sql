-- CreateTable
CREATE TABLE `Resi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_resi` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `nama_barang` VARCHAR(191) NULL,
    `origin` VARCHAR(191) NULL,
    `destination` VARCHAR(191) NULL,
    `weight` VARCHAR(191) NULL,
    `courier` VARCHAR(191) NULL,

    UNIQUE INDEX `Resi_no_resi_key`(`no_resi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Contact_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
