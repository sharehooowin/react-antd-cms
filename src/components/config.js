export default  {
    menulist:[
        {
            title:'首页',
            icon:'home',
            url:'/'
        },
        {
            title:'表格',
            icon:'table',
            children:[
                {
                    title:'普通表格',
                    icon:"table",
                    url:"/table/normal"
                }
            ]
        },
        {
            title:'表单',
            icon:'close-circle-o',
            children:[
                {
                    title:'基础表单',
                    icon:'tag',
                    url:'/form/basic-form',
                },
            ]
        },
        {
            title:'登录页',
            icon:'login',
            children:[
                {
                    title:'登录',
                    icon:'login',
                    url:'/page/login',
                },
            ]
        },
        {
            title:'结果页',
            icon:'check-circle',
            children:[
                {
                    title:'成功页',
                    icon:'tag',
                    url:'/result/success',
                },
                {
                    title:'失败页',
                    icon:'tag',
                    url:'/result/fail',
                }
            ]
        },
        {
            title:'异常页',
            icon:'close-circle-o',
            children:[
                {
                    title:'404',
                    icon:'tag',
                    url:'/page/404',
                },
                {
                    title:'500',
                    icon:'tag',
                    url:'/page/500',
                }
            ]
        },
    ],
};