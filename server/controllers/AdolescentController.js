import Adolescent from "../models/AdolescentModel.js";

export function listAll(request, response) {
  Adolescent.find({}).exec().then(adol => {
    return response.json(adol);
  })
}
export function show(request, response) {
  Adolescent.findById(request.params.id).exec().then(com => {
    return response.json(com);
  })
}
export function create(request, response) {
  const adolescent = new Adolescent({
    title: request.body.title,
    body: request.body.body,
    image: request.body.image,
    video: request.body.video
  });

  adolescent.save().then(comm => {
    return response.json(comm);
  });
}

export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  Adolescent.splice(Adolescent.indexOf(Adolescent.find(com => com._id == request.params.id)), 1);
  return response.json(Adolescent);
}