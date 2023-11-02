import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function CardNew({title, description, urlImg, urlSite, author}) {
  return (
    <Card className='mt-2 mb-2 card-card' style={{ width: '24rem' }}>
      <Card.Img className='card-img' variant="top" src={urlImg} />
      <Card.Body className='card-body'>
        <Card.Title>{title?.length > 60? title.substring(0,60) + "...": title}</Card.Title>
        <Card.Text>
          {description?.length > 150? description.substring(0, 150) + "..."  : description}
        </Card.Text>
        <Card.Text>
          Escrito por {author}.
        </Card.Text>
      </Card.Body>
      <Button variant="primary">Site</Button>
    </Card>
  );
}

export default CardNew;