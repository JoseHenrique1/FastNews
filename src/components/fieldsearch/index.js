import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FiedSearch({search, setSearch, handleSearch}) {
  return (
      <InputGroup className="mb-3 w-50 ">
        <Form.Control
          placeholder=""
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button 
          variant="outline-secondary" 
          id="button-addon2"
          onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
  );
}

export default FiedSearch;