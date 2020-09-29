import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

export const EditProduct = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  useEffect(() => {
    (async () => {
      const fetchedProduct = await (
        await axios.get(`http://localhost:3001/${props.match.params.id}`)
      ).data.products;
      setName(fetchedProduct.item);
      setQuantity(fetchedProduct.quantidade);
      setPrice(fetchedProduct.valor);
    })();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(`http://localhost:3001/${props.match.params.id}`, {
      item: name,
      quantidade: quantity,
      valor: price,
    });
    console.log(name, quantity, price)
    // props.history.push('/');
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          placeholder="Enter Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Label>Quantidade</Label>
        <Input
          type="number"
          placeholder="Enter Quantity"
          step="1"
          min="0"
          defaultValue={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></Input>
        <Label>Preço</Label>
        <Input
          type="number"
          placeholder="Enter Price"
          defaultValue={price}
          step=".01"
          min="0"
          onChange={(e) => setPrice(e.target.value)}
        ></Input>
      </FormGroup>
      <Button type="submit">Editar Nome</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancelar
      </Link>
    </Form>
  );
};
