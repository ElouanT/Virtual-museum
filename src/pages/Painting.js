import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import './Painting.css';

const Painting = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    let id = searchParams.get("id");
    
    useEffect(() => {
        try {
            fetch("https://api.artic.edu/api/v1/artworks/"+id)
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
            <div className='header2'>
                <Link to="/">Accueil</Link>
            </div>

            { loading &&
                <div>
                    <Spin className='loading' size="large"/>
                </div>
            }
            
            { (!loading && data) && 
                <div>
                    <h2>{data.title}</h2>
                    <div className='flex'>
                        <div>
                            <img src={"https://www.artic.edu/iiif/2/"+data.image_id+"/full/843,/0/default.jpg"}/>
                            <p>{ data.artist_display}</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            }

            { (!loading && !data) &&
                <div>
                    <div className='header2'>
                        <Link to="/">Accueil</Link>
                    </div>
                    <p> 404 : Not found </p>
                </div>
            }

            <div className="footer">
                <p>Project using <a href="https://api.artic.edu/docs/#introduction">Art Institute of Chicago API</a></p>
            </div>
        </div>
    )
}

export default Painting;