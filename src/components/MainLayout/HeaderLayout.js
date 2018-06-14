import React,{Component} from 'react';
import styles from './HeaderLayout.module.css';
import { Menu, Dropdown, Icon, message} from 'antd';
const MenuItem = Menu.Item;

export default class HeaderLayout extends Component{
    constructor(props){
        super(props);
        this.state = {
            logo:'企业资源管理系统',
            user:'admin',
            menulist:[]
        }
        console.log(this.props);
    }

    logout = async () => {
        message.success('注销成功');
        this.props.history.push('/login');
    }

    render(){
        let renderMenu = (item,index) => {};
        let menu = () => {
            return(
                <Menu>
                    {this.state.menulist.map(renderMenu)}
                    <MenuItem>
                        <a target="_blank" rel="noopener noreferrer" onClick={()=>{this.logout()}}>退出登陆</a>
                    </MenuItem>
                </Menu>
            )
        };
        return(
            <div>
                <div className={styles.logo}>
                    <h1 className={styles.title}>
                        {this.state.logo}
                    </h1>
                </div>

                <div className={styles.user}>
                    <Dropdown overlay={menu()}>
                        <a  href="#" className={styles.username}>
                            <Icon type="user"/>{this.state.user}<Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}