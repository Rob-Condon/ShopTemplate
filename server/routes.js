// import Blog from "../src/components/Blog";

const BlogController = require('./controller/BlogController');
const GalleryController = require('./controller/GalleryController');
const ImageTableController = require('./controller/ImageTableController');
const MenuController = require('./controller/MenuController');
// const AuthenticationControllerPolicy = require('./policies/BlogPolicies')

module.exports = (app) => {
    // app.post('/create', BlogController.createBlog);
    // // AuthenticationControllerPolicy.register
    // app.get('/blog/:blogId', BlogController.getBlog);
    //
    // app.get('/blog', BlogController.getAll);
    //
    // app.post('/createGallery', GalleryController.createGallery);
    //
    // app.get('/Gallery', GalleryController.getAllGallery);
    //
    // app.post('/createImage', ImageTableController.createImageTable);
    //
    // app.get('/ImageTable', ImageTableController.getImageTables);
    //
    // app.post('/MenuController', MenuController.createGallery);

    app.post('/SendOrder', BlogController.SendEmail);
    // app.put('/create', BlogController.uploadThumbnail)



};

