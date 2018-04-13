import mongoose from "mongoose";

const schema = new mongoose.Schema({
  ageGroup: {
    type: Number,
    required: true
  },
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

const Adolescent = mongoose.model("Adolescent", schema);

export default Adolescent;