/**
 * create by xiehaowen 2018-5-4
 */
import React, {Component} from 'react';
import styles from './NotFoundPage.module.css';
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
                    <img src={require('./404.png')} className={styles.images} />
                </div>
                <div className={styles.text}>
                    <div>矮油~~您访问的页面不在地球上...</div>
                    <Button onClick={()=>{this.backPage()}} className={styles.btn} type="primary">回到首页</Button>
                </div>
            </div>
        );
    }
}