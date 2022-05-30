import { authTypes } from "./authType";


export function onLogin (params,dispatch){
    return new Promise((resolve, reject) => {
        dispatch({
            type: authTypes.LOGIN,
            params,
            resolve,
            reject,
        })
    });
}