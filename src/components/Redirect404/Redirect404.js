import React,{Component} from 'react';

export default class Redirect404 extends Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log(this.props);
    }

    componentDidMount(){
        this.props.history.push("/404");
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}