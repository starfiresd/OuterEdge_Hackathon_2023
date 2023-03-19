import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CompanyName } from "../../assets/content/content";
import "./landing.css";

export default function Title() {
  return (
    <>
      <Container>
        <Row>
          <Col className="px-0 mx-0">
            <div className="landing-title-text display-5">
              {CompanyName}&trade;
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
