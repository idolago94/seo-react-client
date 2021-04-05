require('@babel/register')

const router = require('./screens/Main/Switch').default;
const Sitemap = require("react-router-sitemap").default;
const fetch = require("node-fetch");

// (
//     new Sitemap(router)
//         .build('https://seo-react-app.herokuapp.com/')
//         .save('./sitemap.xml')
// );

async function fetchData(type) {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/' + type)
        data = await data.json()
        data = data.map(p => ({ id: p.id}))
        return data
    } catch(e) {
        return []
    }
}

async function generateSitemap() {
    try {
        let posts = await fetchData('posts')
        let users = await fetchData('users')
        let photos = await fetchData('photos')
        let todos = await fetchData('todos')
        let albums = await fetchData('albums')

        const paramsConfig = {
            '/posts/:id': posts,
            '/users/:id': users,
            '/photos/:id': photos,
            '/todos/:id': todos,
            '/albums/:id': albums
        };

        return (
            new Sitemap(router)
                .applyParams(paramsConfig)
                .build('https://seo-react-app.herokuapp.com')
                .save('./sitemap.xml')
        );
    } catch (e) {
        console.log(e);
    }
}

generateSitemap();