import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const ProductList = ({ products, deleteProduct }) => {
  return (
    <ListGroup>
      {products.map((product) => {
        return (
          <ListGroupItem key={product._id} className="d-flex">
            <ul style={{ listStyleType: 'none' }}>
              <l1>{`ID: ${product._id}`}</l1>
              <li>{`Nome: ${product.item}`}</li>
              <li>{`Quantidade: ${product.quantidade}`}</li>
              <li>{`Valor: ${product.valor}`}</li>
            </ul>
            <div className="ml-auto">
              <Link to={`/edit/${product._id}`}>
                <Button className="btn btn-warning mr-1">Editar</Button>
              </Link>
              <Link to="/">
                <Button
                  color="danger"
                  onClick={() => deleteProduct(product._id)}
                >
                  Deletar
                </Button>
              </Link>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
