import fetch from 'isomorphic-unfetch';
import jwtDecode from 'jwt-decode';

function getGapiAccessToken() {
    // return jwtDecode(localStorage.getItem('token')).gapi_access_token;
    // hard code token for now
    return 'ya29.GlybBdYVMPvaSWPwnkxjPAz_ya9hUSjsokztNj-u9n78Myat8Pca6Fe0Mrr1Xy78i-k9bWlY-KVVWYrVoOvzNXnsZiRfO_VzT29NZVrFpmWGXKtrFrOacISpeU4stQ'
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
