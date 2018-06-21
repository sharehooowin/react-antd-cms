import React from 'react';
import moment from "moment/moment";
import 'moment/locale/zh-cn';
import {Table } from 'antd';
moment.locale('zh-cn');

export const columns=[
    {
        title:'ID',
        dataIndex:'id',
        key:'id',
        type:'text',
        primary:true,
    },
    {
      title:'类型',
        dataIndex:"type",
        key:"type",
        type:"select",
        options:[
            {
                value:1,
                text:'类型1'
            },
            {
                value:2,
                text:'类型2'
            },
        ],
        render:text=>(
            text==1?<span>类型1</span>:<span>类型2</span>
        )
    },
    {
        title:'数量',
        dataIndex:'number',
        key:'number',
        type:'number',
    },

    {
        title:'开始时间',
        dataIndex:'start_time',
        key:'start_time',
        type:'time',
        render: text=>{
            let time ='';
            if(typeof text !== 'undefined'){
                time =  moment(text, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
            }

            return(
                <a>{time}</a>
            )
        }
    },
    {
        title:'结束时间',
        dataIndex:'end_time',
        key:'end_time',
        type:'time',
        render: text=>{
            let time ='';
            if(typeof text !== 'undefined'){
                time =  moment(text, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
            }

            return(
                <a>{time}</a>
            )
        }
    },
    {
        title:'备注',
        dataIndex:'remarks',
        key:'remarks',
        type:'textArea',
        rows:6,
    },
];
