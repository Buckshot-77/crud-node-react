import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const ProductList = ({ products, handleDelete }) => {
  return (
    <ListGroup>
      {products.map((product) => {
        return (
          <ListGroupItem key={product._id} className="d-flex">
            <ul style={{ listStyleType: 'none' }}>
              <li>{`Nome: ${product.item}`}</li>
              <li>{`Quantidade: ${product.quantidade}`}</li>
              <li>{`Valor: ${product.valor}`}</li>
            </ul>
            <div className="ml-auto">
              <Link to={`/edit/${product._id}`}>
                <Button className="btn btn-warning mr-1">Edit</Button>
              </Link>
              <Link to="/">
                <Button
                  color="danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
              </Link>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
