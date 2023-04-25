import Product from "../models/PoductModels.js";
import User from "../models/UserModels.js";
import { Op } from "sequelize";
import path from "path";
import fs from "fs";


export const getProducts = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Product.findAll({
                attributes: ['uuid', 'name', 'price', 'gambar', 'description'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Product.findAll({
                attributes: ['uuid', 'name', 'price', 'gambar', 'description'],
                where: {
                    userId: req.userId,
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}
export const getProductsById = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "admin") {
            response = await Product.findOne({
                attributes: ['uuid', 'name', 'price', 'gambar', 'description'],
                where: {
                    id: product.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Product.findAll({
                attributes: ['uuid', 'name', 'price', 'gambar', 'description'],
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const createProduct = async (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const name = req.body.nama;
    const gambar = req.files.gambar;
    const fileSize = gambar.data.length;
    const ext = path.extname(gambar.name);
    const fileName = gambar.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];


    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

    // const{name, price, gambar, description} = req.body;
    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });

        try {
            await Product.create({
                name: name,
                price: price,
                userId: req.userId,
                gambar: fileName,
                description: description,
                url: url
            });
            res.status(201).json({ msg: "Product Created Successfuly" });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    })
}
export const updateProduct = async (req, res) => {
    const product = await Product.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });

    let fileName = "";
    if (req.files === null) {
        fileName = product.gambar;
    } else {
        const gambar = req.files.gambar;
        const fileSize = gambar.data.length;
        const ext = path.extname(gambar.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

        const filepath = `./public/images/${product.gambar}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const { name, price, gambar, description } = req.body;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    try {
        if (req.role === "admin") {
            await Product.update({ name, price, gambar, description, url: url}, {
                where: {
                    id: product.id
                }
            });
            if(!product) return res.status(404).json({msg: "No Data Found"});
        } else {
            if (req.userId !== product.userId) return res.status(403).json({ msg: "Mohon mencari ijin sama Administrator" })
            await Product.update({ name, price, gambar, description }, {
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Product Updated Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
        if (req.role === "admin") {
            await Product.destroy({
                where: {
                    id: product.id
                }
            });
        } else {
            if (req.userId !== product.userId) return res.status(403).json({ msg: "Ini akes terlarang silahkan untuk menghubungi Administrator" })
            await Product.destroy({
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Product Deleted Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}