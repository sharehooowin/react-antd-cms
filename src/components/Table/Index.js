import React,{Component} from 'react';
import FastTable from './FastTable/DataTable';
import {columns} from "./config";
import Header from "./Header";
import styles from './Index.module.css';

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            url:''
        };
    }

    render(){
      return(
        <div className={styles.container}>
            <Header title="基础表格" message="FastTable组件，可快速实现创建，编辑，查看和删除操作。其他功能：分页"/>
            <FastTable
                bordered={true}
                url={this.state.url}
                pageSize={10}
                operation={['create','edit','delete','show']}
                columns={columns}
            />
        </div>
      );
    };
}