import React from 'react'
import markets from '../Markets.json'
import sports from '../Sports.json'
import { Link } from 'react-router-dom'

const SportMarkets = (props) => {
    let filteredMarkets = markets.filter(m => m.sId == props.match.params.sportId)
    return (
        <div>
            <h1>{sports.find(s => s.sportId == props.match.params.sportId).title}</h1>
            {filteredMarkets.length < 1 ? <h3 style={{ fontSize: 30, color: 'white' }}>Not Available Eventes</h3> : filteredMarkets.map((item, index) => (
                <div key={index} style={{ padding: 5, borderBottom: '1px solid black', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flexGrow: 1 }}>
                        <Link to={'/market/' + item.mId}>
                            <p style={{ color: 'white' }}>{item.desc} | {item.mp}</p>
                        </Link>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {item.outcomes.map((o, i) => (
                                <div style={{ padding: 5, border: '1px solid lightgray', margin: 3, backgroundColor: 'white' }} key={i}>{o.desc} {o.price}</div>
                            ))}
                        </div>
                    </div>
                    <img src={sports.find(s => s.sportId == item.sId).sportImage} />
                </div>
            ))}
        </div>
    )
}

export default SportMarkets