import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { CompanyName } from "../../assets/content/content";
import "./landing.css";

export default function Title() {
  return (
    <>
      <Container>
        <Row>
          <Col className="px-0 mx-0">
            <div className="text-white display-5">{CompanyName}&trade;</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
