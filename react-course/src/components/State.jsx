import React, {Component} from "react";

class State extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        name: "John",
        lastname: "Rodriguez"
    }

    changeData() {
        if (this.state.name === "John" && this.state.lastname === "Rodriguez")
            this.setState({
                name: "Jose",
                lastname: "Ramirez"
            })
        else
            this.setState({
                name: "John",
                lastname: "Rodriguez"
            })
    }

    render() { 
        return ( 
            <>
                <h1>My name is {this.state.name} and my lastname is {this.state.lastname}</h1>
                <button onClick={this.changeData.bind(this)}>Click</button>
            </>
        ); 
    }
}

export default State;