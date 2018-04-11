import fetch from 'isomorphic-unfetch';
import jwtDecode from 'jwt-decode';

function getGapiAccessToken() {
    // return jwtDecode(localStorage.getItem('token')).gapi_access_token;
    // hard code token for now
    return "ya29.GluaBadGi8WhD4UBaN361zDELeygmosu_dfbciNX_igfLnqSF5e4Ia_REg2qb4FN2xU9NOcsh7_qyKvK71XONT_Mqoiv_Z3T-d12PBl3s0yeadkbYZIJlmoGSEnH";
}

function setPermissionToAllRead(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions?alt=json&access_token=${getGapiAccessToken()}`, {
        body: JSON.stringify({
            role: 'reader',
            type: 'anyone',
        }),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    }).then(res => res.json());
}

function setPermissionToAllEdit(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions?alt=json&access_token=${getGapiAccessToken()}`, {
        body: JSON.stringify({
            role: 'writer',
            type: 'anyone',
        }),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    }).then(res => res.json());
}

function copyFile(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/copy?access_token=${getGapiAccessToken()}`, {
        method: 'POST',
        mode: 'cors',
    }).then(res => res.json());
}

function getFileInfo(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?access_token=${getGapiAccessToken()}`).then(res => res.json());
}
export {
    setPermissionToAllRead,
    getFileInfo,
    copyFile,
    setPermissionToAllEdit,
};
