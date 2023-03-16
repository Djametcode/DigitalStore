const ProductModel = require("../model/product");
const cloudinary = require("../utils/cloudinary");

const createProduct = async (req, res) => {
  try {
    req.body.createdBy = req.UserModel.username;
    const { image_product } = req.body;

    if (!image_product) {
      req.body.image_product = "";
    } else {
      const result = await cloudinary.uploader.upload(image_product, {
        width: "300",
        folder: "Testing",
        resource_type: "auto",
      });
      req.body.image_product = {
        url: result.secure_url,
      };
    }

    const data = await ProductModel.create({ ...req.body });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const data = await ProductModel.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
const getProdcutById = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await ProductModel.findOne({ _id: Id });
    if (!data) {
      return res.status(404).json({ msg: "Data tidak di temukan" });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await ProductModel.findOneAndUpdate(
      { _id: Id },
      { ...req.body },
      { new: true }
    );
    if (!data) {
      return res.status(404).json({ msg: "Produk tidak ditemukan" });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await ProductModel.findOneAndDelete({ _id: Id });

    if (!data) {
      return res.status(404).json({
        msg: "Produk gagal di hapus/ sudah di hapus",
      });
    }

    return res.status(200).json({ data, msg: "Berhasil menghapus produk" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createProduct,
  getAllProduct,
  getProdcutById,
  updateProduct,
  deleteProduct,
};
