import fetch from 'isomorphic-unfetch';
import jwtDecode from 'jwt-decode';

function getGapiAccessToken() {
    // return jwtDecode(localStorage.getItem('token')).gapi_access_token;
    // hard code token for now
    return 'ya29.GlyZBTMcbVyFcllJvEey4sDT_fIsvf2YVb_aJGVP5G6EcMtf9Aszc4hK2CnJr0wfHIJm9bWD4bqdmwWSP3gc4qv4BBmblAwD3und6RmwPk3s8c-m-D4SofCEOAxqQA'
}
function setPermissionToAllRead() {
    // return fetch()
}

function getFileInfo(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?access_token=${getGapiAccessToken()}`).then(res => res.json());
}
export {
    setPermissionToAllRead,
    getFileInfo,
};
