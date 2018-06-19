import React, {Component} from 'react';
import styles from './MainLayout.module.css';
import {Button,Layout} from 'antd';
import HeaderLayout from './HeaderLayout';
import MenuLayout from './MenuLayout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {routes} from '../route';
import Redirect404 from '../Redirect404/Redirect404';
const {Header, Content, Sider,Footer} = Layout;
export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.isMobile);
    }
    render() {
        let renderRoute = (item,index) => {
            return(
                <Route key={index} exact path={item.url} component={item.component}/>
            );
        };
        return (
            <Layout className={styles.container}>

                    <Sider className={styles.sider} trigger={null}
                           collapsible theme="light">
                        <MenuLayout {...this.props}/>
                    </Sider>

                    <Layout className={styles.contentLayout}>

                        <Header className={styles.header} >
                            <HeaderLayout {...this.props}/>
                        </Header>

                        <Content className={styles.content}>
                            <Switch>
                                {routes.map(renderRoute)}
                                <Route component={Redirect404}/>
                            </Switch>
                        </Content>

                    </Layout>

            </Layout>
        );
    }
}