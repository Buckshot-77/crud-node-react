import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';

export const ProductList = ({ products, renderProducts }) => {
  const handleDelete = (productID) => {
    axios.delete(`http://localhost:3001/${productID}`);
  };

  return (
    <ListGroup>
      {products.map((product) => {
        return (
          <ListGroupItem key={product._id} className="d-flex">
            <span>{product.item}</span>
            <div className="ml-auto">
              <Link
                to={`/edit/${product._id}`}
                className="btn btn-warning mr-1"
              >
                Edit
              </Link>
              <Link to="/">
                <Button color="danger" onClick={() => handleDelete(product._id)}>
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
