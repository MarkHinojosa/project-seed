import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ageGroup: {
    type: Number,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  video: {
    required: false
  },
  likes : {
    type: Number,
    default: 0
},
});

const Adult = mongoose.model("Adult", schema);

export default Adult;