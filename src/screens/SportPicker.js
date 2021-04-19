import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sports from '../Sports.json';

export default class SportPicker extends Component {
    render() {
        return <div>
            {sports.map((sp, i) => (
                <Link to={'/results/' + sp.title}>
                    <div key={i} style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                        <img width={30} src={sp.sportImage} />
                        <p style={{ color: 'white', fontSize: 20 }}>{sp.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    }
}