import fetch from 'isomorphic-unfetch';
import jwtDecode from 'jwt-decode';
import addStudentWorksheetCopy from './relay/mutations/addStudentWorksheetCopy';

function getGapiAccessToken() {
    // return jwtDecode(localStorage.getItem('token')).gapi_access_token;
    // hard code token for now
    return 'ya29.GlypBR2pnkZwXrNrZIjxG1Mk-ED07nu2yeCLxpgoqe2HEmH0N8ayMgm6E3KkJ2TfxhCIkDc2zUcJyfwZ0pWVMMXdPTQB97SsBJIlYRU-VMzDiEq82CBAk9Ep7AuFfw';
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
    }).then(res => res.json()).catch(err => console.log(err));
}

function copyFile(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/copy?access_token=${getGapiAccessToken()}`, {
        method: 'POST',
        mode: 'cors',
    }).then(res => res.json()).catch(err => console.log(err));
}

function addFile() {
    return fetch(`https://www.googleapis.com/upload/drive/v3/files/?access_token=${getGapiAccessToken()}`, {
        body: JSON.stringify({
            name: 'PlayGround',
        }),
        method: 'POST',
        mode: 'cors',
    }).then(res => res.json()).catch(err => console.log(err));
}

function getFileInfo(fileId) {
    return fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?access_token=${getGapiAccessToken()}`).then(res => res.json());
}

function InitialStudentSetup(environment, id) {
    fetch('http://localhost:8080?', {
        body: JSON.stringify({
            query: '{\n\tlessons{\n    id\n    name\n    notesURL\n    worksheetURL\n  }\n}\n\n',
            variables: null,
            operationName: null,
        }),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    }).then(res => res.json()).then((data) => {
        const { lessons } = data.data;
        if (!lessons || lessons === undefined) {
            alert('Failed to setup Student. Try again');
        }
        // loop through each lesson and copy each worksheet
        lessons.forEach((lesson) => {
            if (lesson.worksheetURL === undefined || !lesson.worksheetURL) {
                console.log(`Error: lesson ${id} doesnt have worksheetURL...`);
            } else {
                copyFile(lesson.worksheetURL).then((res2) => {
                    if (res2 === undefined || res2.error) {
                        console.err('Copy File failed. Contact Admin');
                    } else {
                        const newFileID = res2.id;
                        addStudentWorksheetCopy(environment, id, lesson.id, `https://docs.google.com/document/d/${newFileID}`);
                        setPermissionToAllEdit(newFileID).then((res3) => {
                            if (res3.error) {
                                alert('Failed to set Permission To all Edit. Please contact Admin to manually do so.');
                            } else {
                                console.log('permission set to all edit');
                                // TODO: write succeed message using state
                                return true;
                            }
                        });
                    }
                }).catch(err => console.log(err));
            }
        });
    });
}

export {
    setPermissionToAllRead,
    getFileInfo,
    copyFile,
    setPermissionToAllEdit,
    getIdFromUrl,
    InitialStudentSetup,
    addFile,
};
