"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConstants = createConstants;
exports.createReducer = createReducer;

//创建常量的函数:
function createConstants() {
  for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
    constants[_key] = arguments[_key];
  }

  return constants.reduce(function (acc, constant) {
    acc[constant] = constant;
    return acc;
  }, {});
}

//创建reducer的函数
function createReducer(initialState, reducerMap) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}