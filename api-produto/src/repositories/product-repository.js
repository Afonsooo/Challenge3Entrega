const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getProduct = async () => {
    const result = await Product.find({}, 'title price _id active');

    return result;
}

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price description active');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price                
            }
        });
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}