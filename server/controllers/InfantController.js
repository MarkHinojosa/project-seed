import Infant from "../models/InfantModel.js";

export function listAll(request, response) {
  Infant.find({}).exec().then(inf => {
    return response.json(inf);
  })
}
export function show(request, response) {
  Infant.findById(request.params.id).exec().then(inf => {
    return response.json(inf);
  })
}
export function create(request, response) {
  const infant = new Infant({
    text: request.body.text
  });

  infant.save().then(comm => {
    return response.json(comm);
  });
}

export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  Infant.splice(Infant.indexOf(Infant.find(inf => inf._id == request.params.id)), 1);
  return response.json(Infant);
}