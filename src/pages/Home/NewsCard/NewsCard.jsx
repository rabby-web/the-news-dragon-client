import {
  FaEye,
  FaRegBookmark,
  FaRegShareFromSquare,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import moment from "moment/moment";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, rating, total_view } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image
            style={{ height: "44px" }}
            src={author?.img}
            roundedCircle
          ></Image>
          <div className="ps-3 flex-grow-1 lh-1">
            <p>{author?.name}</p>
            <p>
              <small>
                {moment(author.published_date).format("yyyy-MM-D")} {}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaRegShareFromSquare></FaRegShareFromSquare>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length < 20 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}>Reade More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <span> {rating.number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};
export default NewsCard;
{
  /* <Card.Img variant="top" src={image_url} /> */
}
