/**
 * Created by xhw.
 */
import React, {Component} from 'react';
import {Modal, Input, Form,message,DatePicker,InputNumber,Select,Radio   } from 'antd';
import {deleteFetch, postFetch, putFetch} from '../../utils/fetch';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showModel() {
        this.setState({
            visible: true
        })
    }

    hideModelHandler() {
        this.setState({
            visible: false
        })
    }

    okHandler() {
        this.props.form.validateFields((err, values) => {
            this.operation(err, values)
        });
    }

    operation(err,values) {
        if(!err){
            if(Object.keys(this.props.value).length>0){
                this.update(values);
            }
            else {
                this.add(values);
            }
        }
        else {
            message.error("参数错误")
        }
    }

    async update(values){
        const props = this.props;

        const result = await putFetch(props.url+'/'+props.value[props.primary],values);
        if(result.status ===200){
            props.getData();
            this.setState({
                visible: false
            });
            message.success("数据修改成功");
        }
        else{
            message.error("数据修改失败");
        }
    }

    async add(values){
        const result = await postFetch(this.props.url,values);
        if(result.status ===200){
            this.props.getData();
            this.setState({
                visible: false
            });
            message.success("数据添加成功");
        }
        else{
            message.error("数据添加失败");
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const renderInput = (options,index) => {
                switch (options.type) {
                    case 'text':
                    case 'password':
                        return (
                            <FormItem key={index} hasFeedback label={options.title + ":"}>

                                {getFieldDecorator(options.dataIndex, {
                                    rules: options.rule,
                                    initialValue: this.props.value[options.dataIndex]
                                })(
                                    <Input
                                        size="large"
                                        type={options.type}
                                        placeholder={options.title}
                                        disabled={Object.keys(this.props.value).length>0&&options.disabled? true:false}  //修改的时候可编辑
                                    />
                                )}
                            </FormItem>
                        )
                    case 'textArea':

                        return (
                            <FormItem key={index} hasFeedback label={options.title + ":"}>

                                {getFieldDecorator(options.dataIndex, {
                                    rules: options.rule,
                                    initialValue: this.props.value[options.dataIndex]
                                })(
                                    <TextArea
                                        rows={4}
                                        placeholder={options.title}
                                        disabled={Object.keys(this.props.value).length>0&&options.disabled? true:false}
                                    />
                                )}
                            </FormItem>
                        )
                    case 'time':
                        return(
                            <FormItem key={index} hasFeedback label={options.title + ":"}>

                                {getFieldDecorator(options.dataIndex, {
                                    rules: options.rule,
                                    initialValue: Object.keys(this.props.value).length > 0 ?
                                        moment(this.props.value[options.dataIndex], 'YYYY-MM-DD HH:mm:ss') :
                                        moment(new Date(), 'YYYY-MM-DD HH:mm:ss')
                                })(
                                    <DatePicker
                                        size="large"
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        placeholder="选择时间"
                                        style={{"width":"100%"}}
                                        disabled={Object.keys(this.props.value).length>0&&options.disabled? true:false}
                                    />
                                )}
                            </FormItem>

                        )
                    case 'number':
                        return (
                            <FormItem key={index} hasFeedback label={options.title + ":"}>

                                {getFieldDecorator(options.dataIndex, {
                                    rules: options.rule,
                                    initialValue: this.props.value[options.dataIndex]
                                })(
                                    <InputNumber
                                        size="large"
                                        style={{width: '100%'}}
                                        placeholder={options.title}
                                        min={options.range?options.range[0]:-1000}
                                        max={options.range?options.range[1]:1000}
                                    />
                                )}
                            </FormItem>
                        )
                    case 'select':
                        return (
                            <FormItem key={index} hasFeedback label={options.title + ":"}>

                                {getFieldDecorator(options.dataIndex, {
                                    rules: options.rule,
                                    initialValue: this.props.value[options.dataIndex]?
                                        this.props.value[options.dataIndex]:
                                        options.options[0].value
                                })(
                                    <Select
                                        style={{ width: '100%' }}
                                        size="large"
                                    >
                                        {options.options.map(selectOptionRender)}
                                    </Select>
                                )}
                            </FormItem>
                        );
                    case 'radio':
                        return (
                            <FormItem key={index} hasFeedback label={options.title + ":"}>
                                {getFieldDecorator(options.dataIndex, {
                                    rules: options.rule,
                                    initialValue: this.props.value[options.dataIndex]?
                                        this.props.value[options.dataIndex]:
                                        options.options[0].value
                                })(
                                    <RadioGroup
                                        style={{ width: '100%' }}>
                                        {options.options.map(radioOptionRender)}
                                    </RadioGroup>
                                )}
                            </FormItem>
                        );
                }
            };
        let selectOptionRender = (options,index)=>{
            return (
                <Option key={index} value={options.value}>{options.text}</Option>
            )
        };

        let radioOptionRender = (options,index) => {
            return (
                <Radio key={index} value={options.value}>{options.text}</Radio>
            );
        };

        return (
            <span>
                <span onClick={e => {
                    this.showModel()
                }}>
                    {this.props.children}
                </span>
                <Modal
                    // maskClosable={false}
                    width="40%"
                    title={this.props.title}
                    visible={this.state.visible}
                    okText="确认"
                    cancelText="取消"
                    onOk={e => {
                        this.okHandler()
                    }}
                    onCancel={e => {
                        this.hideModelHandler()
                    }}
                >
                    {this.props.columns.map(renderInput)}
                </Modal>
            </span>

        );
    }
}

export default Form.create()(EditModal);

