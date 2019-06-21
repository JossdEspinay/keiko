import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { put, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import { login } from 'services/networking/request';

import { loginUserError, loginUserRequest, loginUserSuccess } from '../actions';
import loginUserSaga, { loginUser } from '../sagas';

const loginUserRequestAction = loginUserRequest({
  username: 'bilbo@culdesac.gnd',
  password: 'm0ñPr3cieuX',
});
const token = 'OX1dSSVRFX1BPU1QsQ0FOX1JFQURfTkV';

describe('[Saga] Login redux', () => {
  describe('loginUser', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        await expectSaga(loginUser, loginUserRequestAction)
          .provide([[matchers.call.fn(login), token]])
          .put(loginUserSuccess({ token }))
          .run();
      });
    });

    describe('when request fails', () => {
      it('should call the error action', async () => {
        const error = new Error();
        await expectSaga(loginUser, loginUserRequestAction)
          .provide([[matchers.call.fn(login), throwError(error)]])
          .put(loginUserError({ errorMessage: error.message }))
          .not.put.actionType(getType(loginUserSuccess))
          .run();
      });
    });
  });
});
