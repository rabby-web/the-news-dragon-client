
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ( {news} ) => {
    const { _id, title, details, image_url } = news;
    return (
        <div>
            <Card className="">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                  
                    {details.length < 20 ? <>{details}</>:
                    <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Reade More</Link></>
                    
                    }
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;
{/* <Card.Img variant="top" src={image_url} /> */}