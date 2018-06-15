import React,{Component} from 'react';
import styles from './BasicForm.module.css';
import {Form} from 'antd';
const FormItem = Form.Item;

export default class  BasicForm extends Component{
    constructor(props){
        super(props);
        this.state={};
    };

    render(){
        return(
            <div className={styles.container}>
                <Form>

                </Form>
            </div>
        );
    }
}