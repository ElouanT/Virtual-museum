import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import PaintingCard from '../components/PaintingCard';
import 'antd/dist/antd.css';
import './Home.css';

function HomePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetch("https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_title?page=1&limit=24")
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
                setLoading(false);
            });
        } catch (error) {
            setLoading(false);
        }
    }, [data])

    return (
        <div>
            <div className="header">
                <h1>The Gallery</h1>
            </div>

            { loading &&
                <div>
                    <Spin className='loading' size="large"/>
                </div>
            }

            { !loading &&
                <div className="images">
                    {data.map((painting) => (
                        <PaintingCard id={painting.id} imageId={painting.image_id} title={painting.title} description={painting.description}/>
                    ))}
                </div>
            }

            <div className="footer">
                <p>Project using <a href="https://api.artic.edu/docs/#introduction">Art Institute of Chicago API</a></p>
            </div>
        </div>
    )
}

export default HomePage;