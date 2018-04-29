import Adult from "../models/AdultModel.js";

export function listAll(request, response) {
  Adult.find({}).exec().then(adults => {
    return response.json(adults);
  })
}
export function show(request, response) {
  Adult.findById(request.params.id).exec().then(com => {
    return response.json(com);
  })
}
export function create(request, response) {
  console.log("request body value: ", request.body)
  const adult = new Adult({
    title: request.body.title,
    body: request.body.body,
    image: request.body.image,
    video: request.body.video
  });
  adult.save().then(comm => {
    console.log("attempted to save")
    return response.json(comm);
  });
}

export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  Adult.splice(Adult.indexOf(Adult.find(com => com._id == request.params.id)), 1);
  return response.json(Adult);
}