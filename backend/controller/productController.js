const Product = require("../models/productsmodels");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
// get all product --admin
exports.CreateProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })

});
// fatch all products 
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 2;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  
  let products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
  });
});
//getProduct detail
exports.getProductdetail = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return (next(new ErrorHandler("product not found", 404)))
    }

    res.status(201).json({
        sucess: true,
        product
    })
});
// uddate product --admin
exports.updateproducts = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return (next(new ErrorHandler("product not found", 404)))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });

    res.status(201).json({
        sucess: true,
        product
    })
})

//delete product -- admine
exports.deleteProducts = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return (next(new ErrorHandler("product not found", 404)))
    }
    await Product.findByIdAndDelete(req.params.id);

    res.status(201).json({
        sucess: true,
    })

});