import { Card } from 'antd';
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'

const PaintingCard = (props) => {
    const { Meta } = Card;

    const favorites = useSelector((state) => state.favorites.value);
    
    let navigate = useNavigate(); 
    const routeChange = (id) =>{ 
        let path = `painting?id=` + id; 
        navigate(path);
    }

    return (
        <Card key={props.id} style={{width: 300, height: 500 }} onClick={()=>routeChange(props.id)} hoverable
        cover={
            <img src={"https://www.artic.edu/iiif/2/"+props.imageId+"/full/843,/0/default.jpg"} style={{width: 300, height: "auto"}}/>
        }>
            { (favorites.includes(parseInt(props.id))) &&
                <img className="favorite" src={require('../assets/images/star.png')} style={{width: 25, height: 25}} />
            }
            <Meta title={props.title} description={props.artist_title} />
        </Card>
    )
}

export default PaintingCard;