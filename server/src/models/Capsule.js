const mongoose = require('mongoose');
const { Schema } = mongoose;

const capsuleSchema = new Schema({ 
    "capsule_serial": String,
    "capsule_id": String,
    "status": String,
    "original_launch": Schema.Types.Date,
    "original_launch_unix": Number,
    "missions": [
        {
            "name": String,
            "flight": Number
        }
    ],
    "landings": Number,
    "type": String,
    "details": String,
    "reuse_count": Number,
})

const Capsule = mongoose.model('capsule', capsuleSchema);
module.exports = Capsule;