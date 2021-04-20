import React from 'react'
import results from '../Results.json'
import sports from '../Sports.json'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Event = props => {
    const { eventId } = props.match.params
    const event = results.find(res => res.eventid == eventId)
    const sport = sports.find(sp => sp.sportId == event.sportid)
    return (
        <div style={{ color: 'white' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{event.teamA} - {event.teamB} {event.date.replace(/\-/g, '.')}</title>
                <meta name="description" content={`תוצאת משחק ${sport?.title} - ${event.teamA} נגד ${event.teamB} בתאריך  ${event.date.replace(/\-/g, '.')}`} />
            </Helmet>
            <h1>תוצאת משחק {sport?.title} - {event.teamA} נגד {event.teamB} בתאריך  {event.date.replace(/\-/g, '.')}</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontSize: 40, padding: 20 }}>
                <div style={{ fontWeight: event.scoreA < event.scoreB ? 'bold' : 'normal' }}>
                    <p>{event.scoreB}</p>
                    <p>{event.teamB}</p>
                </div>
                <p style={{ padding: 50 }}> - </p>
                <div style={{ fontWeight: event.scoreA > event.scoreB ? 'bold' : 'normal' }}>
                    <p>{event.scoreA}</p>
                    <p>{event.teamA}</p>
                </div>
            </div>
            <div>
                <div style={{ padding: 5, backgroundColor: 'white', margin: 10, borderRadius: 3 }}>
                    <Link to={'/team/' + event.teamA}>תוצאות משחקים של {event.teamA}</Link>
                </div>
                <div style={{ padding: 5, backgroundColor: 'white', margin: 10, borderRadius: 3 }}>
                    <Link to={'/team/' + event.teamB}>תוצאות משחקים של {event.teamB}</Link>
                </div>
                <div style={{ padding: 5, backgroundColor: 'white', margin: 10, borderRadius: 3 }}>
                    <Link to={'/results/' + sport?.title}>תוצאות משחקים נוספים בענף {sport?.title}</Link>
                </div>
                <div style={{ padding: 5, backgroundColor: 'white', margin: 10, borderRadius: 3 }}>
                    <Link to={'/results/all/' + event.date}>תוצאות משחקים נוספים בתאריך {event.date.replace(/\-/g, '.')}</Link>
                </div>
            </div>
        </div>
    )
}

export default Event