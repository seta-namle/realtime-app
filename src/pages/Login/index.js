import React from "react";
import "antd/dist/antd.css";
import style from './style.scss';
import { connect } from 'react-redux';
import veritoneLogo from 'resources/images/Veritone-logo-300x300.jpg';
import { Form, Icon, Input, Button, Checkbox, Divider } from "antd";
import { ROUTE_HOME } from "state/modules/routing";

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const { username, password } = values;
            if (!err && username === 'demo' && password === 'demo') {
                this.props.redirectToHome(username, password)
            } else {
                alert(`please enter demo/demo to login`)
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style['form-container']}>
                <div className={style["login-form"]}>
                    <img src={veritoneLogo} style={{ margin: '0 auto', display: 'block' }} alt="Veritone Logo" />
                    <Divider style={{ color: 'gray', fontSize: 13 }}>Easily Using</Divider>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ color: 'black', borderColor: 'black' }} icon="github" size="large" />
                        &nbsp; &nbsp;
                        <Button style={{ color: 'black', borderColor: 'black' }} icon="smile" size="large" />
                    </div>

                    <Divider style={{ color: 'gray', fontSize: 13 }}>OR Using Account Details</Divider>

                    <div style={{ margin: '0 auto' }}>
                        <Form onSubmit={this.handleSubmit}>
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
                                    valuePropName: "unchecked",
                                    initialValue: true
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className={style["login-form-forgot"]} href="">
                                    Forgot password?
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
                                <Divider style={{ fontWeight: 520, color: '#ff4d4f' }}>New to aiWARE ?</Divider>
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
            </div>
        );
    }
}

const WrappedLogin = Form.create({ name: "normal_login" })(
    Login
);

export default connect(
    null,
    {
        redirectToHome: (username, password) => ({
            type: ROUTE_HOME,
            payload: { username, password }
        })
    }
)(WrappedLogin);