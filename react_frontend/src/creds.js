const { google } = require('googleapis');
const drive = google.drive('v3');

drive.files.copy({
    auth: API_KEY,
    fileId: '1pUaxSXVHrgRkhs6HNqMIbwFFP7hRTaNedg_GKlFjbtQ',
    access_token: 'ya29.GluVBb3QL11AkxZFShM7Qp1bScwIa3Noe9ZBVBIl4-y7QRb4mlKgrO2Z0vbI_U76eeYDpyMvf4gHYKXvmEBXhsC2LhYR-f3b2w00ehZBNLN4XgbmG8-KIzZLAYwE',
}, (err, response) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(response.data.displayName);
});

export const API_KEY = 'AIzaSyCNtUcu4OZGxB3o4R4lzFOvkIq7ozXycwo';
const access_token = 'ya29.GluVBb3QL11AkxZFShM7Qp1bScwIa3Noe9ZBVBIl4-y7QRb4mlKgrO2Z0vbI_U76eeYDpyMvf4gHYKXvmEBXhsC2LhYR-f3b2w00ehZBNLN4XgbmG8-KIzZLAYwE';