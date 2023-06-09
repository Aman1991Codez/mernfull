import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4></h4>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Payment Gateways"
          />
          <Carousel.Caption>
            <h3>CUSOTM ERP </h3>
            <p>Good Resourcing and Tech Support</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Utlites Bill"
          />
          <Carousel.Caption>
            <h3>Limited Data Solution </h3>
            <p> Deliverd Service Using Marketting @</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}