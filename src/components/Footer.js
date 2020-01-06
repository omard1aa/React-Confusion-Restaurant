import React, { Component } from 'react'
import { CardFooter } from "reactstrap";

class Footer extends Component{
    constructor(props){
        super(props);    }

    render() {
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <CardFooter className={"cardFooter"}>
                        <h2>This is a Card Footer!</h2>
                    </CardFooter>
                </div>
            </div>
        );
    }
}

export default Footer;
