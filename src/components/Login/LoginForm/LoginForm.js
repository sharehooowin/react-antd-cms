import React,{Component} from 'react';
import styles from './LoginForm.module.css';
import {Form,Input,Row,Button,message} from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            HeaderName:'登陆'
        }
    }

    login = async () => {
        message.success('登录成功');
        this.props.history.push("/");
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={styles.form}>
                <div className={styles.logo}>
                    {this.state.HeaderName}
                </div>
                <Form>
                    <FormItem hasFeedback>

                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入你的用户名' }]
                        })(
                            <Input size="large"  placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的密码' }]
                        })(
                            <Input size="large" type="password" placeholder="密码"/>
                        )}
                    </FormItem>
                </Form>
                <Row>
                    <Button type="primary" size="large" onClick={()=>{this.login()}} className={styles.btn}>
                        登陆
                    </Button>
                    <p>

                    </p>
                </Row>
            </div>
        )
    }
}

export default Form.create()(LoginForm);