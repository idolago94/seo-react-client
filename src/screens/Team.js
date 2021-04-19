import React from 'react'
import results from '../Results.json'
import sports from '../Sports.json'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Team = props => {
    const { teamName } = props.match.params
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{teamName}</title>
                <meta name="description" content={`תוצאות משחקים של ${teamName}`} />
            </Helmet>
            <h1>תוצאות משחקים של {teamName}</h1>
            <div>
                {results.filter(res => res.teamA == teamName || res.teamB == teamName).map((res, i) => {
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
                                        <p>ענף: {sport.title}</p>
                                        <p>תאריך: {res.date.replace(/\-/g, '.')}</p>
                                    </div>
                                </div>
                                <img width={40} height={40} src={sport.sportImage} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Team