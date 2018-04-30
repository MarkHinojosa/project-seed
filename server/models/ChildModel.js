import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
    type: String,
    required: false
  },
  likes : {
    type: Number,
    default: 0
},
});

const Child = mongoose.model("Child", schema);

export default Child;