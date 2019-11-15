import React, { Fragment } from "react";
import "antd/dist/antd.css";
import style from './style.scss';
import { Form, Icon, Input, Button, Checkbox, Divider } from "antd";

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style["login-form"]}>
                <h1>Veritone logo</h1>
                <Divider className={style['divider']}>Easily using</Divider>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button icon="github" size="large" />
                    &nbsp; &nbsp;
                    <Button icon="smile" size="large" />
                </div>

                <Divider className={style['divider']}>OR Using Account Details</Divider>
                <div style={{ margin: '0 auto' }}>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Item>
                            {getFieldDecorator("username", {
                                rules: [{ required: true, message: "Please input your username!" }]
                            })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("password", {
                                rules: [{ required: true, message: "Please input your Password!" }]
                            })(
                                <Input
                                    prefix={<Icon type="lock" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("remember", {
                                valuePropName: "",
                                initialValue: true
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className={style["login-form-forgot"]} href="">
                                Forgot password
                            </a>
                            <Button
                                icon="key"
                                htmlType="submit"
                                type="primary"
                                ghost
                                className={style["login-form-button"]}
                            >
                                Login
                            </Button>
                            <Divider style={{fontWeight: 520, color: '#ff4d4f'}}>New to aiWARE ?</Divider>
                            <Button
                                icon="user"
                                type="danger"
                                ghost
                                // htmlType="submit"
                                className={style["login-form-button"]}
                            >
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedLogin = Form.create({ name: "normal_login" })(
    Login
);

export default WrappedLogin;