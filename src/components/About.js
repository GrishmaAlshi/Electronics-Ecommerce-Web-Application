import {Card} from "react-bootstrap";


const About = () => {

    return (
        <>
            <Card border="dark" style={{ padding: '40px' }}>
                <Card.Title>About our website</Card.Title>
                Our website serves the purpose of selling electronics specifically mobiles and laptops to users.
                A user upon visiting our website is first displayed a privacy policy statement and terms of use on our home page.
                The home page contains generic information on our range of products and offers available.
                A user can navigate through the navigation bar to access the login or register page.
                Our website allows the user to browse through various products as well filter through whether they want to view laptops or mobiles. The website’s functionality also allows a search feature where the user can search for a particular laptop or mobile brand and only those brand items are displayed. A user can add items to a cart, wishlist them as well as view a product in isolation for more details.
            </Card>
        </>
    );
}

export default About;