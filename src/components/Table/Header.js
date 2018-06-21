import React,{Component} from 'react';
import styles from './Infos.module.css';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className={styles.container}>
                <div><h1>{this.props.title}</h1></div>
                <div><p>{this.props.message}</p></div>
            </div>
        )
    };
};