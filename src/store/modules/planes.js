let boeing737 = {
  type: 'Boeing 737',
  maxPassengers: 215,
  minPassengers: 85,
  flightCode: 'BA1111',
  gate: null,
  id: 1,
  priority: 3,
  value: 10
};
let boeing777 = {
  type: 'Boeing777',
  maxPassengers: 396,
  minPassengers: 314,
  flightCode: 'BB1211',
  gate: null,
  id: 1,
  priority: 2,
  value: 10
};
let airbusA318100 = {
  type: 'Airbus A318-100',
  maxPassengers: 239,
  minPassengers: 107,
  flightCode: 'AB1121',
  gate: null,
  id: 1,
  priority: 1,
  value: 100
};

function Plane(src) {
  this.id = src.id;
  this.maxPassengers = src.maxPassengers;
  this.minPassengers = src.minPassengers;
  this.flightCode = src.flightCode;
  this.gate = src.flightCode;
  this.id = src.id;
  this.priority = src.priority;
  this.value = src.value;
}


let generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const state = {
  planeList: [
    airbusA318100,
    boeing737,
    boeing777
  ],
  planeTypes: [
    boeing737,
    boeing777,
    airbusA318100,
  ]

};
const getters = {
  getPlaneList: state => {
    return state.planeList;
  },
  getPlaneTypes: state => {
    return state.planeTypes;
  }
};
const mutations = {
  UPDATE_PLANE_LIST(state, payload) {
    state.planeList = payload;
  },
  ADD_PLANE(state, payload) {

    const randomPlaneNumber = generateRandomNumber(1, state.planeTypes.length);

    const randomId = generateRandomNumber(1, 10000);
    const randomValue = generateRandomNumber(1, 100);
    const randomPriority = generateRandomNumber(1, 5);

    const newPlane = new Plane(state.planeTypes.slice(randomPlaneNumber - 1)[0]);

    newPlane.id = randomId;
    newPlane.value = randomValue;
    newPlane.priority = randomPriority; // husk å fikse

    state.planeList.push(newPlane);

  },
  REMOVE_PLANE(state, payload) {
    state.planeList.shift();
  },
  UPDATE_PRIO(state, payload) {
    for (var i = 0; i < state.planeList.length; i++) {
      state.planeList[i].priority = generateRandomNumber(1, 5);
    }
  },
  SORT_BY_VALUE() {
    state.planeList.sort(function (a, b) {
      if (a.value < b.value)
        return 1;
      if (a.value > b.value)
        return -1;
      return 0;
    });

    for (var i = 0; i < state.planeList.length; i++) {
      state.planeList[i].priority = generateRandomNumber(4, 5);
    }
  }
};
const actions = {
  updatePlaneList: ({
    commit
  }, payload) => {
    commit('UPDATE_PLANE_LIST', payload);
  },
  addPlane: ({
    commit
  }, payload) => {
    commit('ADD_PLANE', payload);
  },
  removePlane: ({
    commit
  }, payload) => {
    commit('REMOVE_PLANE');
  },
  updatePrio: ({
    commit
  }, payload) => {
    console.log('committig prio');
    commit('UPDATE_PRIO');
  },
  sortByValue: ({
    commit
  }, payload) => {
    commit('SORT_BY_VALUE')
  },
  asyncAddPlane: ({
    commit
  }, payload) => {
    setInterval(() => {
      console.log('Adding to store');
      commit('ADD_PLANE', payload);
    }, Math.ceil(Math.random() * 10000 - 1));
  },
  asyncRemovePlane: ({
    commit
  }, payload) => {
    setInterval(() => {
      console.log('Removing from store');
      commit('REMOVE_PLANE');
    }, 10000);
  },

};

// const namespaced = true;

export default {
  state,
  getters,
  mutations,
  actions
}
