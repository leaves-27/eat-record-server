import { expect } from 'chai';
import { createConstants,createReducer } from '../lib/index';

describe('createReducer', () => {
  it('创建的reducer是否可用', () => {
    var state = undefined,
        hanlder = {
          ['a'](state,action){
            return state
          }
        };

    var reducers = createReducer(state,hanlder);
    var value = reducers({"a":1,"b":2},{type:"a",state:"n"});

    expect(value).to.be.deep.equal({"a":1,"b":2});
  });
});

describe('createConstants', () => {
  it('创建的action常量是否正确', () => {
    var constants = createConstants("SET_STATE","MODIFY_STATE");
    expect(constants).to.be.deep.equal({
      "SET_STATE":"SET_STATE",
      "MODIFY_STATE":"MODIFY_STATE"
    });
  });
});