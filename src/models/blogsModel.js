const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema( {
  title: {
    type: String, 
    required: true
},
    body:{
        type: String, 
        required: true
    }, 
    authorId: {
        type: String,       
        required: true
    },
    tags: {
        type: ["String"]
    },
    category:{
        type: String,
        required: true
    },
    subcategory:{

        type: ["String"]

    },
    deletedAt: {
        type: Date,
        default: null,
      },
    
    isDeleted: {
        type: Boolean,
         default: false
        },
        publishedAt: {
            type: Date
        }, 
        isPublished: {
            type: Boolean,
            default: false}     


}, { timestamps: true });

module.exports = mongoose.model('Blog', blogsSchema) 


