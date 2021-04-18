import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import sports from '../Sports.json';
export default class Welcome extends Component {
    render() {
        let items = [
            { title: 'כל הארועים', route: '/markets' },
            ...sports.map(s => ({ title: s.title, route: '/sport/' + s.sportId }))
        ]
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome seo-react</title>
                <meta name="description" content="welcome to the first react app with professional seo" />
            </Helmet>
            {/* <h1>Welcome</h1> */}
            <img style={{ paddingTop: 20 }} width={450} src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDkyIDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTkwLjE2OCA5LjM4MmMtMS4wMS0uODctMi4yNjktMS40MS0zLjcyMi0xLjQyMy0xLjcyLS4wMTYtMy4wNy40NTUtMy44NjQuNzQzLS44MjguMjgzLTEuMTM0LjQwNy0yLjEwNC40MjNhLjQ2OC40NjggMCAwIDEtLjI0NS0uMDdsLS4wMDItLjAwMWEyLjgwNiAyLjgwNiAwIDAgMC00LjQ1NC4wMDVjLTEuNDc1LS42OTctMy4yMTYtMS4wOTQtNS4xNC0xLjEtMi41NDQuMDA2LTQuODk0LjcyMy02Ljc1OCAyLjA0OC0uMDU2LjA0LS4xMTIuMDgtLjE2OC4xMjJhNS44MiA1LjgyIDAgMCAwLTQuNTMzLTIuMTcgNi44ODUgNi44ODUgMCAwIDAtMy41My45NDkgMi44MjggMi44MjggMCAwIDAtMS41NTYtLjQ3M2gtNC45N2MtLjY4NiAwLTEuMzU5LjI1OC0xLjg3LjcxNGE1LjgxMSA1LjgxMSAwIDAgMC0zLjUyNS0xLjE5IDYuODg3IDYuODg3IDAgMCAwLTMuNTMuOTQ5IDIuODMgMi44MyAwIDAgMC0xLjU1OC0uNDczaC00Ljk2OGMtLjQxMiAwLS44Mi4wOTMtMS4xOS4yNjZhMi44MDYgMi44MDYgMCAwIDAtMS4xODctLjI2NWgtMi44NjVsLjk3NS0zLjAzYTIuODMyIDIuODMyIDAgMCAwLS4yNy0yLjE1OSAyLjgyIDIuODIgMCAwIDAtMS43MjYtMS4zMjFsLTQuOTc2LTEuM2EyLjc5NyAyLjc5NyAwIDAgMC0yLjE2MS4zMTQgMi44MDIgMi44MDIgMCAwIDAtMS4yODQgMS43NjhsLS4zNzUgMS43NTNhNC45MzUgNC45MzUgMCAwIDAtMy43ODYtMS43ODYgNC44OTggNC44OTggMCAwIDAtMy44MTUgMS44NGwtLjQ5LTIuMzQyQTIuODAyIDIuODAyIDAgMCAwIDkuMjM2LjQwNmEyLjc5MiAyLjc5MiAwIDAgMC0yLjE2LS4zMTRMMi4xIDEuMzljLS43MjYuMTktMS4zNTMuNjctMS43MjcgMS4zMjFhMi44MzMgMi44MzMgMCAwIDAtLjI2OSAyLjE2bDQuNzEzIDE2LjU2YTIuODE1IDIuODE1IDAgMCAwIDIuNjEgMi4wNTNsNS4wMTcuMTcxYTIuODEyIDIuODEyIDAgMCAwIDIuMzYyLTEuMTQ4IDIuODA5IDIuODA5IDAgMCAwIDIuMzYyIDEuMTQ4bDUuMDE4LS4xNzFhMi44MDcgMi44MDcgMCAwIDAgMi4wMi0uOTdjLjA0My4wNS4wODcuMS4xMzMuMTQ3YTIuODMgMi44MyAwIDAgMCAxLjk4OC44MjVoNC45NjhjLjQxMiAwIC44MTktLjA5MyAxLjE4OS0uMjY2LjM3LjE3My43NzYuMjY2IDEuMTg4LjI2Nmg0LjI1NWMuNzI2IDAgMS40MTItLjI4MiAxLjkyNi0uNzY1YTIuODI0IDIuODI0IDAgMCAwIDEuOTI2Ljc2NWg0Ljk2OGMuNDExIDAgLjgxOC0uMDkzIDEuMTg4LS4yNjYuMzcuMTczLjc3Ni4yNjYgMS4xODguMjY2aDQuMjU3YTIuODEgMi44MSAwIDAgMCAxLjkyNC0uNzY1IDIuODI5IDIuODI5IDAgMCAwIDEuOTI2Ljc2NWg0Ljk2OWEyLjgzIDIuODMgMCAwIDAgMi4yODMtMS4xNzZjMS43NTcgMS4wNyAzLjg3OSAxLjY0NSA2LjE1NiAxLjY1IDIuMDU1LS4wMDUgMy45MDEtLjQ1OCA1LjQzOC0xLjI0NS41MTguNDkgMS4yMTYuNzcxIDEuOTMuNzcxaDQuOTdjLjczOSAwIDEuNDYzLS4zIDEuOTg2LS44MjVhMi44MyAyLjgzIDAgMCAwIC44MjItMS45ODl2LTIuMjE5Yy4yOTIuMDUuNTkyLjA3OS45LjA4MiAyLjkxMy0uMDI0IDUuMjczLTIuMzE2IDUuMzA1LTUuMjg4LS4wMDctMS42NjMtLjgyNy0zLjAwMy0xLjgyLTMuODY2ek0zNi40OCAxNy40NzV2LS4zMWMuMDMzLjA0MS4wNjguMDguMTA1LjEybC0uMTA1LjE5em0xNS40NTEtLjAwMnYtLjMwOGwuMTA1LjEyLS4xMDUuMTg4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGOUNGMDMiIGQ9Ik04OS4xOCAxMy4yNDdjMC0xLjM1Ny0xLjM4LTIuNDc2LTIuNzM0LTIuNDc2LTIuNTkyIDAtMy4yMzMgMS4xNjYtNS45NjggMS4xNjYtLjk5NyAwLTEuOTI1LS40NTEtMi40NzEtMS4xNjZ2OS45MDJoNC45Njh2LTcuMjM2YS44OS44OSAwIDAgMSAuNzEzLS4zMzRjLjE5IDAgLjM4LjA0OC41MjMuMTY4IDAgMS4zMzIgMS4xMTcgMi40NTEgMi40NzMgMi40NTEgMS4zNTUgMCAyLjQ5NS0xLjExOSAyLjQ5NS0yLjQ3NXptLTIwLjg0OSA0LjA3bDQuODAyLS44MzR2LTEuMDQ3bC00LjgwMi0uODMzYy40MjgtLjY2NiAxLjM3OS0xLjM1NiAyLjg3Ny0xLjM1NiAxLjU5MyAwIDMuMDY3LjYxOCAzLjk0NiAxLjU5NGwxLjQyNi0xLjgwOGMtMS4xNjUtMS4yNjItMy4yNTctMi4yNjItNS45NDMtMi4yNjItMy45OTQgMC03LjI1IDIuMzMyLTcuMjUgNS4xOSAwIDIuODU1IDMuMjU2IDUuMTg4IDcuMjUgNS4xODggMi42ODYgMCA0Ljc3OC0xIDUuOTQzLTIuMjYxbC0xLjQyNi0xLjgxYy0uODguOTc3LTIuMzUzIDEuNTk1LTMuOTQ2IDEuNTk1LTEuNDk4IDAtMi40NDktLjY5LTIuODc3LTEuMzU2ek01Ny4yMyAyMC42NzNoNC45Njh2LTYuODc5YTMuMDI1IDMuMDI1IDAgMCAwLTMuMDE5LTMuMDIzYy0xLjgzIDAtMy4xMzggMS4wNDctNC4wNjUgMi43MzhsLTEuMDIyIDEuODU2di00LjExN2gtNC45Njl2OS40MjVoNC4yNTZsMi43ODEtNS4wNDZjLjEyLS4yMzguMzMzLS42Mi41OTQtLjYyLjI2MiAwIC40NzYuMjE1LjQ3Ni40Nzd2NS4xODl6bS0xNS40NTIgMGg0Ljk2OHYtNi44NzlhMy4wMjUgMy4wMjUgMCAwIDAtMy4wMi0zLjAyM2MtMS44MyAwLTMuMTM3IDEuMDQ3LTQuMDY0IDIuNzM4bC0xLjAyMiAxLjg1NnYtNC4xMTdoLTQuOTY4djkuNDI1aDQuMjU0bDIuNzgyLTUuMDQ2Yy4xMi0uMjM4LjMzMy0uNjIuNTk1LS42Mi4yNjEgMCAuNDc1LjIxNS40NzUuNDc3djUuMTg5em0tMTUuNDUyIDBoNC45Njh2LTkuNDI1aC00Ljk2OHY5LjQyNXptLTQuMjc3IDBsNC44MTgtMTYuMDI2TDIxLjgyIDMuMzRsLTIuODQgMTIuMTY3TDE3LjA1IDExLjNoLTQuNDg4bC0xLjkzMiA0LjIwN0w3LjY4OCAyLjgwNiAyLjY0MiA0LjExM2w0LjkyMSAxNi41Nmg0Ljg5MmwyLjM1LTUuMDEgMi4zNTIgNS4wMWg0Ljg5MnptLTQuNDY0LTEzLjMzYzAtMS41LTEuMjYyLTIuNzM3LTIuNzYtMi43MzdhMi43NSAyLjc1IDAgMCAwLTIuNzM1IDIuNzM3IDIuNzUgMi43NSAwIDAgMCAyLjczNSAyLjczOGMxLjQ5OCAwIDIuNzYtMS4yMzcgMi43Ni0yLjczOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=='} />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingTop: 60 }}>
                {sports.map(s => <img style={{padding: 10}} src={s.sportImage} />)}
            </div>
            {/* <ul style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Link to='/posts'>
                    <li>Posts</li>
                </Link>
                <Link to='/users'>
                    <li>Users</li>
                </Link>
                <Link to='/photos'>
                    <li>Photos</li>
                </Link>
                <Link to='/todos'>
                    <li>Todos</li>
                </Link>
                <Link to='/albums'>
                    <li>Albums</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul> */}
        </div>
    }
}