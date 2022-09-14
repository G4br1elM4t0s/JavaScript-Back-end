const mongoose = require('mongoose');
const routes = require('../../routes');

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    done:{
        type:Boolean,
        default:false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

});


module.exports = mongoose.model('Task',TaskSchema);