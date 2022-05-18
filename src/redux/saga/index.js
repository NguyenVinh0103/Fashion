import {all, fork} from 'redux-saga/effects';
import authSagas from './authSagas';
import utilSagas from './utilSagas'
export default function* rootSaga() {
    yield all([
        fork(authSagas),
        fork(utilSagas)
    ]);
}
