import "./App.css";

import CustomNavbar from "../nav/CustomNavbar";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


function App() {

  return (
    <div className="App">
      <CustomNavbar />
      <Container>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Search Artist</Form.Label>
            <Form.Control id="artist_name_input" type="text" placeholder="Artist's Name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
