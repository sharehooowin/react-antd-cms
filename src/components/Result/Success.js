import React,{Component} from 'react';
import styles from './Success.module.css';
import {Icon, Timeline ,} from 'antd';

export default class Success extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Icon style={{fontSize:'5em',color:'#52c41a'}} type="check-circle" />
                    <div className={styles.message}>
                        <h1>提交成功</h1>
                        <h3>请认真核对您的提交信息</h3>
                    </div>
                </div>
                <div className={styles.details}>
                    <Timeline pending="审核中...">
                        <Timeline.Item color="green">创建成功 2018-6-4</Timeline.Item>
                        <Timeline.Item color="green">提交成功 2018-6-4</Timeline.Item>
                    </Timeline>
                </div>
            </div>
        );
    }
}
