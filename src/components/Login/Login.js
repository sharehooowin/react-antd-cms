import React, {Component} from 'react';
import styles from './index.module.css';
import LoginForm from './LoginForm/LoginForm';
export default class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.bg}>

                </div>
                <div className={styles.form}>

                    <LoginForm {...this.props}/>
                </div>
            </div>

        );
    }
}