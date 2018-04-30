import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
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

const Infant = mongoose.model("Infant", schema);

export default Infant;