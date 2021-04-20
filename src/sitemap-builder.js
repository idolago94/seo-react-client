require('@babel/register')

const router = require('./screens/Main/Switch').default;
const Sitemap = require("react-router-sitemap").default;
const fetch = require("node-fetch");
const sports = require('./Sports.json')
const markets = require('./Markets.json')
const results = require('./Results.json')
const uniq = require('lodash/uniq')
const isEqual = require('lodash/isEqual')
// (
//     new Sitemap(router)
//         .build('https://seo-react-app.herokuapp.com/')
//         .save('./sitemap.xml')
// );

// async function fetchData(type) {
//     try {
//         let data = await fetch('https://jsonplaceholder.typicode.com/' + type)
//         data = await data.json()
//         data = data.map(p => ({ id: p.id}))
//         return data
//     } catch(e) {
//         return []
//     }
// }

async function getResultsRoutes() {
    try {
        let arr = []
        results.map(res => {
            let sport = sports.find(s => s.sportId == res.sportid)
            if (!sport) {
                let newItem = { sportName: 'all', date: res.date }
                if (!arr.find(a => isEqual(a, newItem))) arr.push(newItem)
            } else {
                let newItem = { sportName: sport.title, date: res.date }
                if (!arr.find(a => isEqual(a, newItem))) arr.push(newItem)

                let newItemAllSport = { sportName: 'all', date: res.date }
                if (!arr.find(a => isEqual(a, newItemAllSport))) arr.push(newItemAllSport)
            }
        })

        return arr
    } catch (e) {
        console.log(e);
    }
    // let arr = uniq(results.reduce((a, b) => a.concat([
    //     { sportName: sports.find(s => s.sportId == b.sportid) ? sports.find(s => s.sportId == b.sportid).title : 'all', date: b.date },
    //     // { sportName: sports.find(s => s.sportId == b.sportid) ? sports.find(s => s.sportId == b.sportid).title : 'all' },
    //     { sportName: 'all', date: b.date },
    // ]), []))
}

async function getTeamsRoutes() {
    try {
        let arr = []
        results.map(res => {
            const { teamA, teamB } = res
            if (!arr.find(a => isEqual(a, { teamName: teamA }))) arr.push({ teamName: teamA })
            if (!arr.find(a => isEqual(a, { teamName: teamB }))) arr.push({ teamName: teamB })
        })
        return arr
    } catch(e) {
        console.log(e);
    }
}

async function generateSitemap() {
    try {
        // let posts = await fetchData('posts')
        // let users = await fetchData('users')
        // let photos = await fetchData('photos')
        // let todos = await fetchData('todos')
        // let albums = await fetchData('albums')

        const paramsConfig = {
            // '/posts/:id': posts,
            // '/users/:id': users,
            // '/photos/:id': photos,
            // '/todos/:id': todos,
            // '/albums/:id': albums

            // '/sport/:sportId': sports.map(s => ({ sportId: s.sportId })),
            // '/market/:marketId': markets.map(m => ({ marketId: m.mId }))

            '/results/:sportName/:date': await getResultsRoutes(),
            '/results/:sportName': sports.map(s => ({ sportName: s.title })),
            '/event/:eventId': results.map(res => ({ eventId: res.eventid })),
            '/team/:teamName': await getTeamsRoutes()
        };

        return (
            new Sitemap(router)
                .applyParams(paramsConfig)
                .build('https://sports-resultss.herokuapp.com')
                .save('./sitemap.xml')
        );
    } catch (e) {
        console.log(e);
    }
}

generateSitemap();