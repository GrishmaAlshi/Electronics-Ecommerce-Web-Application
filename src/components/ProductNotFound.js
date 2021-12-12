import {Card, Col} from "react-bootstrap";
import NavigationTop from "./NavigationTop";
import {Row} from "./Footer/FooterStyles";
import NavigationSidebar from "./NavigationSidebar";
import Orders from "./Orders/Orders";
import Footer from "./Footer/Footer";


const NotFound = () => {

    return (
        <>
            <NavigationTop/>
            <h1>Welcome to your profile</h1>
            <Row>
                <Col>
                    <NavigationSidebar/>
                </Col>
                <Row>
                    <div>Oops ! The product you're searching for is not found! </div>
                </Row>

            </Row>
            <Footer/>
        </>
    );
}

export default NotFound;