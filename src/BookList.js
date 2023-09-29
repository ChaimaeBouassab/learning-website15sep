// src/components/BookList.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const books = [
  {
    title: 'Book 1',
    author: 'Author 1',
    coverImg: '/hihihi.png',
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    coverImg: 'url_to_cover_image_2.jpg',
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    coverImg: 'url_to_cover_image_3.jpg',
  },
];

const BookList = () => {
  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={book.coverImg} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
