import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Spin } from 'antd';
import 'antd/dist/antd.css';
import './Home.css';

const { Meta } = Card;

const Home = () => {
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

    let navigate = useNavigate(); 
    const routeChange = (id) =>{ 
        let path = `painting?id=` + id; 
        navigate(path);
    }

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
                        <Card key={painting.id} style={{width: 300, height: 500 }} onClick={()=>routeChange(painting.id)} hoverable
                        cover={
                            <img src={"https://www.artic.edu/iiif/2/"+painting.image_id+"/full/843,/0/default.jpg"} style={{width: 300, height: "auto"}}/>
                        }>
                            <Meta title={painting.title} description={painting.artist_title} />
                        </Card>
                    ))}
                </div>
            }

            <div className="footer">
                <p>Project using <a href="https://api.artic.edu/docs/#introduction">Art Institute of Chicago API</a></p>
            </div>
        </div>
    )
}

export default Home;