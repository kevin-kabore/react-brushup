/* 
    Promise - ES6
    - Instantiated with new Promise()
    - argument is a function that takes resolve, and reject
    - The return value is assigned to the variable
    - value is accessed with .then()
    - error is accessed with .catch

    - Promises give us control over what we want to do with asynchronous events
        -When they FAIL OR SUCCEED
    - Can chain .then to act on the async response
        - .then wraps the return in a resolve promise
    - Fetch returns a promise value.
        - Either rejects or resolves it and wraps the json in a promise
*/
const myPromise = new Promise((resolve, reject) => {
    console.log('[promises.js] myPromise()')
    if (true) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I am a failed promise');
    }
    
});

myPromise
    .then(value => console.log(value))
    .catch(errorVal => console.log(errorVal));

const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0]
        console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(response => response.json())
    .then(posts => console.log(posts));

const myAsyncFunction = async () => {
    console.log('[promises.js] myAsyncFunction()')
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        const secondUser = users[1];
        console.log(secondUser);

        const postsRespone = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id)
        const posts = await postsRespone.json();
        console.log(posts);    
    } catch (error) {
        console.log('There was an error');   
    }
}

myAsyncFunction();