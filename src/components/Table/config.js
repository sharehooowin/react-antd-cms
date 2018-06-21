import React from 'react';
import moment from "moment/moment";
import 'moment/locale/zh-cn';
import {Table } from 'antd';
moment.locale('zh-cn');

export const columns=[
    {
        title:'订单编号',
        dataIndex:'id',
        key:'id',
        type:'text',
        primary:true,
        showTitle:'订单号码'
    },
    {
        title: '交易密钥',
        dataIndex: 'password',
        key: 'password',
        type: 'password',
        disabled:true,
    },
    {
        title:'邮寄方式',
        dataIndex:"expressType",
        key:"expressType",
        type:"radio",
        options:[
            {
                value:1,
                text:'自付'
            },
            {
                value:2,
                text:'货到付款'
            },
        ],
        render:text=>(
            text==1?<span>自付</span>:<span style={{color:'orange'}}>货到付款</span>
        )
    },
    {
        title:'类型',
        dataIndex:"type",
        key:"type",
        type:"select",
        options:[
            {
                value:null,
                text:'请选择'
            },
            {
                value:1,
                text:'公开'
            },
            {
                value:2,
                text:'私有'
            },
        ],
        render:text=>(
            text==1?<span style={{color:'blue'}}>公开</span>:<span style={{color:'red'}}>私有</span>
        )
    },
    {
        title:'交易金额',
        dataIndex:'number',
        key:'number',
        type:'number',
        range:[0,200]
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
