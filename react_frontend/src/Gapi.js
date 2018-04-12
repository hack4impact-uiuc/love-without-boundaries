import fetch from 'isomorphic-unfetch';
import jwtDecode from 'jwt-decode';

function getGapiAccessToken() {
    // return jwtDecode(localStorage.getItem('token')).gapi_access_token;
    // hard code token for now
    return "ya29.GlybBeVWupg9aj-JLl9FPkI9oQku017awC71IeBEr0O0n…HGfXs7A2QShiHYIm5dRQQg44ypDy5mEXHyVXkgYb0UFH_cLLg"
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

function getIdFromUrl(url) {
    return url.match(/[-\w]{25,}/);
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
    getIdFromUrl
};
