import React, { Component } from 'react';

class Props extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <h1>
                    My name is {this.props.name}
                </h1>
            </>
        );
    }
}

export default Props;