import React from 'react'
import markets from '../Markets.json'
import sports from '../Sports.json'
import { Link } from 'react-router-dom'

const MarketsList = () => {
    return (
        <div>
            {markets.map((item, index) => (
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
                    <Link to={'/sport/' + sports.find(s => s.sportId == item.sId).sportId}>
                        <img src={sports.find(s => s.sportId == item.sId).sportImage} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MarketsList