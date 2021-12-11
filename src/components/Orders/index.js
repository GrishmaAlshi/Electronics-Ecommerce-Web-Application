import NavigationSidebar from "../NavigationSidebar";
import {Col} from "react-bootstrap";
import {Row} from "../Footer/FooterStyles";
import NavigationTop from "../NavigationTop";
import Footer from "../Footer/Footer";
import Orders from "./Orders";

const Order = () => {
    return (
        <>
            <NavigationTop/>
            <h1>Welcome to your profile</h1>
            <Row>
                <Col>
                    <NavigationSidebar/>
                </Col>
                <Col>
                    <Orders/>
                </Col>
            </Row>
            <Footer/>
        </>

    );
}

export default Order;