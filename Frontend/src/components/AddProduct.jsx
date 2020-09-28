import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

export const AddProduct = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);

  const createProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/', {
      item: name,
      quantidade: quantity,
      valor: price,
    });
    props.history.push('/');
  };
  return (
    <Form onSubmit={createProduct}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          name="item"
          id="item"
          placeholder="Caneta"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Label>Quantidade</Label>
        <Input
          type="number"
          name="quantidade"
          id="quantidade"
          placeholder="1"
          min="0"
          onChange={(e) => setQuantity(e.target.value)}
        ></Input>
        <Label>Preço</Label>
        <Input
          type="number"
          step=".01"
          min="0"
          name="valor"
          id="valor"
          placeholder="2.99"
          onChange={(e) => setPrice(e.target.value)}
        ></Input>
      </FormGroup>
      <Button type="submit">Submeter</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancelar
      </Link>
    </Form>
  );
};
