import { Card, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <Card border="dark" style={{ padding: "40px" }}>
        <Card.Title>FAQ's</Card.Title>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What are the shipping options?</Accordion.Header>
            <Accordion.Body>
              We offer guaranteed delivery on certain delivery speeds and select
              products. If we provide a guaranteed delivery date and a delivery
              attempt isn't made by this date, we'll refund any shipping fees
              associated with that order. All Bazinga standard shipping rates
              and policies apply to these items when shipped domestically,
              including free shipping on qualifying orders. International
              shipping may not be available for all items.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>When will I receive my order?</Accordion.Header>
            <Accordion.Body>
              If your item isn't delivered on time, we'll refund the shipping
              charge. This doesn't apply if a delivery is attempted but no one
              is available to accept the package. You will receive an email
              regarding tracking details for a package.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where are you located?</Accordion.Header>
            <Accordion.Body>
              Our head office is located at Northeastern University, Boston, MA.
              For any issues regarding deliveries or defected products, you may
              reach out to our customer service branch located at Boylston St.,
              Boston, MA.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </>
  );
};

export default FAQ;
