import React from 'react'
import markets from '../Markets.json'
import sports from '../Sports.json'

const MarketDetails = (props) => {
    let marketItem = markets.find(m => m.mId == props.match.params.marketId)
    console.log('------', Object.keys(marketItem));
    return (
        <div>
            <h1 style={{ color: 'whitesmoke' }}>{marketItem.league} {marketItem.desc}</h1>
            {Object.keys(marketItem).map((k, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', color: 'white', padding: 7, backgroundColor: index%2 == 0 ? 'rgb(100,100,100)' : 'rgb(150,150,150)' }}>
                    {k}: {marketItem[k] && marketItem[k].map ?
                        marketItem[k].map((o, i) => <div style={{ padding: 5, border: '1px solid lightgray', margin: 3, backgroundColor: 'white', color: 'black' }} key={i}>{o.desc} {o.price}</div>)
                        : JSON.stringify(marketItem[k])}
                </div>
            ))}
        </div>
    )
}

export default MarketDetails