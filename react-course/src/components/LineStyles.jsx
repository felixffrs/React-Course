import React, {Component} from "react";

class LineStyles extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 

        let age=38

        const title = {
            textAlign: "center",
            color: "green",
            backgroundColor: age>=37 ? "yellow" : "red"
        }
        return ( 
            <>
                <h1 style={title}>I'm title</h1>
            </>
        );
    }
}

export default LineStyles;