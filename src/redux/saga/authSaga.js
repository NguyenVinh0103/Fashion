import { delay, put, takeLatest } from 'redux-saga/effects';
import { API_CODE } from '../../enum';
import { api } from '../../services/api';
import { authTypes } from '../action/authType';

export function* doLogin(action) {
    const { params, type, resolve, reject } = action; //// Mỗi hàm đều có 4 giá trị cố định này .
    try {
        yield delay(300)
        const response = yield api.post('https://reqres.in/api/login', params); /// gọi api và truyền body data
        const code = response?.status;
        let token = ""
        if (code == API_CODE.OK) {
            token = response?.data?.token
            yield put({ type: authTypes.LOGIN_SUCCESS, payload: token })
            // eve.holt@reqres.in
            // cityslicka
        }
        yield delay(300)
        resolve({statusCode: code, data: token}); 
    } catch (e) {
        console.log(e);
        resolve(false);
    }
}

export default function* watchAuthSagas() {
    yield takeLatest(authTypes.LOGIN, doLogin);
}
