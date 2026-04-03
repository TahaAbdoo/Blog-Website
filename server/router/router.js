const express = require('express');
const router = express.Router();
const UserController=require('../controller/UserController');
const BlogController=require('../controller/BlogController');
const CategoryController=require('../controller/CategoryController');
const ImageController=require('../controller/ImageController');
const multer =require('multer');
const fs = require('fs');
const path = require('path');
const ImagesModel=require('../model/ImageModel');


router.post("/login",UserController.login);
router.post("/register",UserController.create);

router.get('/allBlogs',BlogController.getBlogs);
router.get('/blog/:id' ,  BlogController.getBlog);
router.post("/addCategory", CategoryController.addCategory);
router.get('/getCategories' ,  CategoryController.getCategories);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'public/users';
        fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
      }
  })


const upload = multer({ storage: storage });
router.post('/addBlog', upload.single('picture'), BlogController.addBlog);
 
router.post('/upload',upload.single('picture'),ImageController.upload);

router.get('/getallimages',ImageController.getallimages);




module.exports=router;