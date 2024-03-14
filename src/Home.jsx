import { useState, useEffect } from "react"

import ActiveSlider from "./ActiveSlider"

import Body from "./Body"
import About from "./components/About"

export default function Home() {
    const handleClick = () => { setNote("bella") }
    const [note, setNote] = useState("start")
    const [blog, setblog] = useState([{
        title: 'bello', body: 'cdvb cdvgbhn cfvgbnm', author: 'helen', id: 1
    }, {
        title: 'bello', body: 'cdvb cdvgbhn cfvgbnm', author: 'helen', id: 2
    }, {
        title: 'bello', body: 'cdvb cdvgbhn cfvgbnm', author: 'helen', id: 3
    }])
    useEffect(() => console.log('bff'))
    return (
        <div className="home">

            <Body />

            <ActiveSlider></ActiveSlider>
            <About></About>
            
            

        </div>
    )
}