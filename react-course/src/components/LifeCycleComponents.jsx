import React, {Component} from "react";

class LifeCycleComponents extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Jesus",
            event: null
        }
    }

    changeName() {
        this.setState({name: "Luis"})
    }

    //Mounting the component(events, http requests)
    componentDidMount() {
        this.state.event=window.addEventListener("resize", ()=>{
            console.log(window.innerWidth)
        })
    }

    //Update the component(updates)
    componentDidUpdate(prevProps, prevState) {
        if (prevState === this.state.name){
            console.log("My state not changed")
        } else {
            console.log("My state was changed and now, i'm", this.state.name)
        }
    }

    //Unmount of the component(clean events and timers)
    componentWillUnmount() {
        window.removeEventListener("resize", this.state.event)
    }
    
    render() { 
        return ( 
            <>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this)}>Change Name</button>
            </>
        );
    }
}

export default LifeCycleComponents;