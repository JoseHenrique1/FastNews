import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardNew({title, description, urlImg, urlSite, author}) {
  return (
    <Card className='mt-2 mb-2' style={{ width: '24rem' }}>
      <Card.Img variant="top" src={urlImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Escrito por {author}.
        </Card.Text>
        <Button variant="primary">Site</Button>
      </Card.Body>
    </Card>
  );
}

export default CardNew;