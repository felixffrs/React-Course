import React, {Component} from "react";
import styles from "./ModuleStyles.module.css"

class ModuleStyles extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <h1 className={styles.title}>Module Styles</h1>
            </>
        );
    }
}

export default ModuleStyles;