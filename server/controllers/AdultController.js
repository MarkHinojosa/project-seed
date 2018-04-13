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
  const adult = new Adult({
    text: request.body.text
  });

  adult.save().then(comm => {
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