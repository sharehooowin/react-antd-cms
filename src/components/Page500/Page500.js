/**
 * create by xiehaowen 2018-5-4
 */
import React, {Component} from 'react';
import styles from './Page500.module.css';
import {Button} from 'antd';
export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
    }
    backPage(){
        this.props.history.push("/")
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.page}>
                    <img src={require('./500.svg')} className={styles.images} />
                </div>
                <div className={styles.text}>
                    <h1>500</h1>
                    <Button onClick={()=>{this.backPage()}} className={styles.btn} type="primary">回到首页</Button>
                </div>
            </div>
        );
    }
}