const API_URL = '/api/projects/';

export async function getProjects() {
    return fetch(API_URL)
    .then(res => {
        if(!res.ok) {
            if(res.status >= 400 && res.status < 500) {
                return res.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            } else {
                let err = {errorMessage: 'Please try again later. Server is not responding.'};
                throw err;
            }
        }
        return res.json();
    })
}

export async function createProject(newProject) {
    return fetch(API_URL, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({newProject})
        })
        .then(res => {
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    return res.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later. Server is not responding.'};
                    throw err;
                }
            }
            return res.json();
        })
}