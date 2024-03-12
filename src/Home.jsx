import { useState, useEffect } from "react"
import Blog from './Blog'
import ActiveSlider from "./ActiveSlider"
import Support from "./Support"
import Body from "./Body"
import About from "./About"
import Platform from "./Platform"
import ReviewPage from "./ReviewPage"
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
            <ReviewPage />

        </div>
    )
}