import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button, message } from 'antd';
import user from './../../api/user';
import config from './../../utils/config';
import './topbar.less';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            isLogin: false,
        };
    }

    /**
     * 监听用户改变
     * @param e
     */
    onChangeUserName = (e) => {
        this.setState({ username: e.target.value });
    };

    /**
     * 监听密码改变
     * @param e
     */
    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    /**
     * 提交
     */
    submit = () => {
        console.log(`${config.apiHost}user/login`);
        axios.post(`${config.apiHost}user/login`, {
            username: this.state.username,
            password: this.state.password,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            transformRequest: [(data) => {
                let ret = '';
                Object.keys(data).forEach((value) => {
                    ret += `${encodeURIComponent(value)}=${encodeURIComponent(data[value])}&`;
                });
                const newRet = ret.slice(0, ret.length - 1);
                return newRet;
            }],
        })
            .then((res) => {
                console.log(res);
                if (res.data.tip_code === 10001) {
                    const data = res.data.data.infos;
                    window.sessionStorage.setItem('userinfo', JSON.stringify(data));
                    this.setState({ isLogin: true });
                    if (data.role_id === 9 || data.role_id === 10) {
                        window.location.replace("#/monitor");
                    } else if (data.role_id === 9 || data.role_id === 11) {
                        this.$router.push({ path: '/monitor' });
                    } else if (data.role_id === 20) {
                        this.$router.push({ path: '/monitor' });
                    }
                } else {
                    message.error(res.data.tip_msg);
                }
            });
    };

    /**
     * 注销
     */
    logout = () => {
        user.logout().then((res) => {
            if (res.data.tip_code === 10001) {
                window.sessionStorage.removeItem('userinfo');
                this.setState({ isLogin: false });
                window.location.replace("#/");
            }
        });
    };

    render() {
        const username = this.state.username;
        const password = this.state.password;
        return (
            <header className="App-header">
                <div className="A-h-left">
                    <div className="App-logo iconfont icon-guanggao"></div>
                    <div className="menu-btn">
                        <span className="icon iconfont icon-menu"></span>
                        <span className="title">广告管理系统</span>
                    </div>
                </div>
                {
                    this.state.isLogin ? (
                        <div className="A-h-infos">
                            <div className="form-item">
                                <Button size="small" type="primary" onClick={this.logout}>注销</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="A-h-infos">
                            <div className="form-item">
                                <label htmlFor="username">账号：</label>
                                <div className="form-ipt">
                                    <Input size="small" placeholder="账号" id="username" value={ username }  onChange = {this.onChangeUserName }/>
                                </div>
                            </div>
                            <div className="form-item">
                                <label htmlFor="password">密码：</label>
                                <div className="form-ipt">
                                    <Input size="small" placeholder="密码" type="password" id="password" value={ password }  onChange = {this.onChangePassword }/>
                                </div>
                            </div>
                            <div className="form-item">
                                <Button size="small" type="primary" onClick={this.submit}>登录</Button>
                            </div>
                        </div>
                    )
                }
            </header>
        );
    };
}

export default Topbar;