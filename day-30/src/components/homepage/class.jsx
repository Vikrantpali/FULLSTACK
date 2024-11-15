import React, { Component } from "react";

class count extends Component{
    componentDidMount(){
        //Executed when component will load
        console.log('Component has been Mounted')
    }
    componentDidUpdate(prevState, updatedState){
        //Executed when the component updated

    }
    componentWillUnmount(){
        //Executed when component is loaded/unmount
        console.log('Component has been UnMounted')

    }
    render(){
        return(
            <div>
                <h1>This is class based component</h1>
            </div>
        );
    }
}

export default count;