import React,{Component} from 'react';
import styles from './Fail.module.css';
import {Icon} from 'antd';

export default class Fail extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Icon style={{fontSize:'5em',color:'red'}} type="close-circle" />
                    <div className={styles.message}>
                        <h1>操作失败</h1>
                        <h3>请认真核实信息</h3>
                    </div>
                    <h3>您操作的内容有如下错误：</h3>
                </div>
                <div className={styles.details}>
                    <div>
                        <Icon style={{color:'red'}} type="close-circle-o" />
                        <span>您的账户已被冻结</span>
                        <a href="">立即解冻 ></a>
                    </div>
                    <div>
                        <Icon style={{color:'red'}} type="close-circle-o" />
                        <span>您的权限不足</span>
                        <a href="">获取权限 ></a>
                    </div>
                </div>
            </div>
        );
    }
}
