import * as baseService from './base';

function getAllBlogs() {
    // console.log("--method--", baseService.getAuthToken());
    // console.log("--Bearer Key--", `${baseService.getAuthToken()}`);
    return baseService.makeFetch('/api/blogs/', {
        method: 'GET',
        headers: new Headers({
            'Authorization': `${baseService.getAuthToken()}`
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function getBlog(id) {
    return baseService.makeFetch(`/api/blogs/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': `${baseService.getAuthToken()}`
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function updateBlog(id, currentEdit) {
    return baseService.makeFetch(`/api/blogs/${id}`, {
        method: 'PUT',
        mode: 'cors', 
        redirect: 'follow',
        body: JSON.stringify({content: currentEdit}), 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `${baseService.getAuthToken()}`
        })
    })
    .then((response) => {
        if (response.ok) {
            // return response.sendStatus(201);
            return;
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function deleteBlog(id) {
    return baseService.makeFetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': `${baseService.getAuthToken()}`
        })
    })
    .then((response) => {
        if (response.ok) {
            // return response.sendStatus(201);
            return;
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function postBlog(blogObj) {
    let requestObj = {
            method: 'POST',
            body: JSON.stringify(blogObj), 
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': `${baseService.getAuthToken()}`
            })
        };
    return baseService.makeFetch(`/api/blogs/`, requestObj)
    .catch((err) => {
        console.log(err);
        throw err;
    })
}


export { getAllBlogs, getBlog, updateBlog, deleteBlog, postBlog };
