import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardNew({title, description, urlImg, urlSite, author}) {
  return (
    <Card style={{ width: '18rem' }}>
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