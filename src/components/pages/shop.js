import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const shop = () => {
    return (
        <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <Card.Img variant="top" src="./shoes.png" />
            <Card.Body>
                <Card.Title>Nyke JK2</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in commodo nunc. Curabitur luctus arcu augue, at luctus purus dictum vel. Fusce efficitur sollicitudin velit, eu posuere felis pellentesque ac. Ut eget nisl euismod, luctus sapien vel, pulvinar nunc. Duis vel egestas massa. Aliquam in nisi eget mauris tempus pellentesque ut at tellus.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
};

export default shop;