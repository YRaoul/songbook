import { useState, useEffect } from "react"


export default function Song (props) {
    // in progress
    const [songList, setSongList] = useState({})

    useEffect(async _ => {
        const songData = await fetch("/api/songs")
        
    })
}