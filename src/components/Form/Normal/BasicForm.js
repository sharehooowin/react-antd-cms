import React,{Component} from 'react';
import styles from './BasicForm.module.css';
import {
    Form,Input,DatePicker,InputNumber,Radio,
    Button,Spin,message,Select,} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const {RangePicker,} = DatePicker;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

export default class  BasicForm extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
        };
    };

    submit = () => {
        message.success("提交成功");
    };

    save = () => {
        message.info("保存成功");
    };

    render(){
        return(
            <div className={styles.container}>
                <Form
                      layout="inline"
                      className={styles.form}
                >

                    {/*标题*/}
                    <FormItem
                        label="标题"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <Input placeholder="标题" />
                    </FormItem>

                    {/*内容*/}
                    <FormItem
                        label="内容"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <TextArea placeholder="内容"
                                  rows={4}
                        />
                    </FormItem>

                    {/*起始日期*/}
                    <FormItem
                        label="起始日期"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <RangePicker style={{width:'100%'}}
                                     placeholder={['开始日期', '结束日期']}
                        />
                    </FormItem>

                    {/*备注*/}
                    <FormItem
                        label="备注"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <TextArea placeholder="备注"
                                  rows={4}
                        />
                    </FormItem>

                    {/*数值*/}
                    <FormItem
                        label="数值"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <InputNumber min={1} max={10} defaultValue={3} />
                    </FormItem>

                    {/*单选*/}
                    <FormItem
                        label="单选"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <RadioGroup defaultValue={1}>
                            <Radio value={1}>公开</Radio>
                            <Radio value={2}>私有</Radio>
                        </RadioGroup>
                    </FormItem>

                    {/*多选*/}
                    <FormItem
                        label="多选"
                        className={styles.formItem}
                        {...formItemLayout}
                    >
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="多选框"
                            defaultValue={["1","2"]}
                        >
                            <Option key="1">选项1</Option>
                            <Option key="2">选项2</Option>
                            <Option key="3">选项3</Option>
                        </Select>
                    </FormItem>

                    {/*提交*/}
                    <FormItem
                        className={styles.formItem}
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 12, offset: 7 },
                        }}
                    >
                        <Button onClick={()=>{this.submit()}} className={styles.btn} type="primary">{this.state.loading?<Spin/>:null}提交</Button>
                        <Button onClick={()=>{this.save()}} className={styles.btn}>保存</Button>
                    </FormItem>

                </Form>
            </div>
        );
    }
}