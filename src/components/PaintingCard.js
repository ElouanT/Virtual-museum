import { Card } from 'antd';
import { useNavigate } from "react-router-dom";

const PaintingCard = (props) => {
    const { Meta } = Card;
    
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
            <Meta title={props.title} description={props.artist_title} />
        </Card>
    )
}

export default PaintingCard;