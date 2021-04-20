import React from 'react'
import results from '../Results.json'
import sports from '../Sports.json'
import SportPicker from './SportPicker'
import DatePicker from './DatePicker'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Results = props => {
    const { sportName, date } = props.match.params
    let sportId = sports.find(s => s.title == sportName)?.sportId
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>תוצאות משחקים {sportName == 'all' ? 'ספורט' : sportName} {date ? `לתאריך ${date}` : ''}</title>
                <meta name="description" content="This page display all sport results by date and sport" />
            </Helmet>
            <div style={{ flexGrow: 1 }}>
                <h1>תוצאות משחקים {sportName == 'all' ? 'ספורט' : sportName} {date ? `לתאריך ${date}` : ''}</h1>
                {/* <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}> */}
                <div>
                    {results.filter(res => (sportName == 'all' || sportId == res.sportid) && (!date || date == res.date)).sort((a, b) => new Date(a.date) - new Date(b.date)).map((res, i) => {
                        let sport = sports.find(sp => sp.sportId == res.sportid)
                        return (
                            <Link to={'/event/' + res.eventid}>
                                <div style={{ margin: 10, border: '1px solid black', borderRadius: 20, backgroundColor: 'rgb(240,240,240)', padding: 10, color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                                        <div style={{ flexGrow: 1 }}>
                                            <p>קבוצה א: {res.teamA}</p>
                                            <p>קבוצה ב: {res.teamB}</p>
                                        </div>
                                        <div style={{ flexGrow: 1 }}>
                                            <p>ענף: {sport?.title}</p>
                                            <p>תאריך: {res.date.replace(/\-/g, '.')}</p>
                                        </div>
                                    </div>
                                    <img width={40} height={40} src={sport?.sportImage} />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Results