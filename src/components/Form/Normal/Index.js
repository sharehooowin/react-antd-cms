import React,{Component} from 'react';
import styles from './Index.module.css';
import Header from '../Header';
import BasicFrom from './BasicForm';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className={styles.container}>
                <Header title="基础表单" message="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"/>
                <BasicFrom/>
            </div>
        );
    };
};