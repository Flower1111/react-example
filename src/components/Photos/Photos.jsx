import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => setPhotos(data));
    }, []);

    return (
        <div>
            <h1>Photos</h1>
            <ul>
                {photos.map((photo) => (
                    <Link key={photo.id} to={`/photos/${photo.id}`}>
                        <li>{photo.title}</li>
                        <img src={photo.url} alt="" />
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export { Photos };