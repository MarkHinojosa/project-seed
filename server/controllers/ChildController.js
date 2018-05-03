import Child from "../models/ChildModel.js";

export function listAll(request, response) {
  Child.find({}).exec().then(children => {
    return response.json(children);
  })
}
export function show(request, response) {
  Child.findById(request.params.id).exec().then(com => {
    return response.json(com);
  })
}
export function create(request, response) {
  const child = new Child({
    title: request.body.title,
    body: request.body.body,
    image: request.body.image,
    video: request.body.video
  });

  child.save().then(comm => {
    return response.json(comm);
  });
}

export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  Child.splice(Child.indexOf(Child.find(com => com._id == request.params.id)), 1);
  return response.json(Child);
}