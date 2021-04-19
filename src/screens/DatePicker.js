import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import results from '../Results.json';
import { uniq } from 'lodash'

export default class DatePicker extends Component {
    render() {
        return <div>
            {uniq(results.map(r => r.date).sort((a, b) => new Date(a) - new Date(b))).map((date, i) => (
                <Link to={'/results/all/' + date}>
                    <p style={{ color: 'white', fontSize: 20 }}>{date}</p>
                </Link>
            ))}
        </div>
    }
}