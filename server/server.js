const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const Upload = require('./model/UploadFile');  // Your Upload model

const app = express();

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination directory for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 7004;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

const DB = 'mongodb://localhost:27017/uploading';
mongoose.connect(DB).then(() => {
  console.log('Database connected..');
}).catch((error) => {
  console.error('Database connection failed:', error.message);
});

// POST route to add a new product
app.post('/uploadFile', upload.single('image'), async (req, res) => {
    try {
      console.log('Request body:', req.body);
      console.log('File:', req.file);
  
      const { name, description, price } = req.body;
      const image = req.file ? req.file.path : null;
  
      const newUpload = new Upload({ name, description, price, image });
      const savedUpload = await newUpload.save();
      res.status(201).json(savedUpload);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(400).json({ message: error.message });
    }
  });
  

// PUT route to edit a product by ID
app.put('/uploadFile/:id', async (req, res) => {
  try {
    const updatedUpload = await Upload.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUpload);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE route to delete a product by ID
app.delete('/uploadFile/:id', async (req, res) => {
  try {
    await Upload.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
