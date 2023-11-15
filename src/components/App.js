import React, { useEffect, useState } from 'react'

function App() {
    const [images, setImages] = useState([]);
    const [image, setImage] = useState(false)
  
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data =>{
            setImages(data),
            setImage(true)
        })

    },[])

    if (!image) return <p>Loading...</p>
    return (
        <>
        <img src={images.message} alt='A Random Dog'/>
        </>
  )
}

export default App
