export function loadChildren() {
  return function (dispatch) {
    fetch("/child")
      .then((response) => {
        return response.json();
      }).then((chil) => {
        dispatch(childrenLoaded(chil));
      });
  };
}

export function childrenLoaded(chil) {
  return {
    type: "CHILDREN_LOADED",
    value: chil
  };
}

export function loadAdults() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_ADULTS"
    }); 
    fetch("/adult")
      .then((response) => {
        return response.json();
      }).then((adul) => {
        dispatch(adultsLoaded(adul));
      });
  };
}

export function adultsLoaded(adul) {
  return {
    type: "ADULTS_LOADED",
    value: adul
  };
}



export function loadAdolescents() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_ADOLESCENTS"
    }); 
    fetch("/adolescent")
      .then((response) => {
        return response.json();
      }).then((adol) => {
        dispatch(adolescentsLoaded(adol));
      });
  };
}

export function adolescentsLoaded(adol) {
  return {
    type: "ADOLESCENTS_LOADED",
    value: adol
  };
}


export function loadChildSeed(id) {
  return function (dispatch) {
      fetch('/child/' + id)
      .then((response) => {
        return response.json();
      }).then((seed) => {
        dispatch(childSeedLoaded(seed));
      });
    }
  };

export function childSeedLoaded(seed) {
  return {
    type: "GET_CHILD_SEED_DONE",
    value: seed
  };
}

export function loadAdultSeed(id) {
  return function (dispatch) {
      fetch('/adult/' + id)
      .then((response) => {
        return response.json();
      }).then((seed) => {
        dispatch(adultSeedLoaded(seed));
      });
    }
  };

export function adultSeedLoaded(seed) {
  return {
    type: "GET_ADULT_SEED_DONE",
    value: seed
  };
}

export function loadAdolescentSeed(id) {
  return function (dispatch) {
      fetch('/adolescent/' + id)
      .then((response) => {
        return response.json();
      }).then((seed) => {
        dispatch(adolescentSeedLoaded(seed));
      });
    }
  };

export function adolescentSeedLoaded(seed) {
  return {
    type: "GET_ADOLESCENT_SEED_DONE",
    value: seed
  };
}
//below this is the create database entries section
export function createChildSeed(c) {
  return function (dispatch) {
    fetch("/child", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c)
    }).then(() => dispatch(loadChildren()));
  };
}

export function createAdolescentSeed(c) {
  return function (dispatch) {
    fetch("/adolescent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c)
    }).then(() => dispatch(loadAdolescents()));
  };
}

export function createAdultSeed(c) {
  return function (dispatch) {
    fetch("/adult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c)
    }).then(() => dispatch(loadAdults()));
  };
}