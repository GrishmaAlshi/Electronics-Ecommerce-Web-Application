import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";

const { useState } = require("react");

const PrivacyAlert = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Privacy Policy & Terms of Use</Alert.Heading>
        <p style={{ "font-size": "16px", "font-weight": "normal" }}>
          It is our topmost priority to protect your private information. The
          Privacy Statement applies to the users of Bazinga .This website is
          meant for sale of products of the Bazinga. You provide your consent to
          the data practices in this privacy policy by using this website. No
          personal information of the user is collected by the website unless
          the user explicitly provides it to us. Certain information like the
          email for subscribing to our offers while registering on the website,
          full name, while purchasing products from the online store are stored
          in our database.Other information may also be gathered by us in the
          future for providing additional services to you for communication of
          the future offers on the products you are interested about as well as
          for analytics purpose. We at Bazinga do not sell the user’s data to
          third parties. In cases of requirement of the data by law , we may
          have to disclose the user's data without any prior notice to the user.
          We can remove your personal data from our records after receiving a
          verified request from your end subject to the following exceptions.
          Deleting your data does not violate any legal obligation. Deleting
          your data prevents us from identifying malicious attackers or any
          other fraudulent activity. The transaction for which the information
          was collected is incomplete. Bazinga reserves the right to update this
          privacy statement on a timely basis. Users’s will be notified about
          the changes in the privacy policy and it is the sole responsibility of
          the user to read the updated policy. In case you feel that the Bazinga
          has not answered your queries in this privacy policy , you can email
          at bazinga@gmail.com about your queries and can expect a response
          within 2-5 business days. Effective as of December 14 2021.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default PrivacyAlert;
