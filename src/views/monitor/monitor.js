import React, { Component } from 'react';
import { Table, Tooltip, Button } from 'antd';
import monitor  from './../../api/monitor/monitor'

const columns = [
    { title: '序号', width: 50, dataIndex: 'num', key: 'num', fixed: 'left' },
    { title: '时间', width: 150, dataIndex: 'STAT_DT', key: 'STAT_DT', fixed: 'left' },
    { title: 'facebook广告账号（点击复制）', dataIndex: 'FACEBOOK_ACCOUNT_ID', key: 'FACEBOOK_ACCOUNT_ID', width: 230, align: 'center' },
    { title: '分类', dataIndex: 'TYPE_NAME', key: 'TYPE_NAME', width: 150, align: 'center' },
    { title: 'facebook编码（点击复制）', dataIndex: 'FB_ID', key: 'FB_ID', width: 200, align: 'center' },
    { title: 'facebook名称', dataIndex: 'FB_NAME', key: 'FB_NAME', width: 200, align: 'center' },
    { title: '事件', dataIndex: 'EVENT_NAME', key: 'EVENT_NAME', width: 150, align: 'center' },
    { title: '优先级', dataIndex: 'PRIORITY_LEVEL', key: 'PRIORITY_LEVEL', width: 100, align: 'center' },
    { title: '状态', dataIndex: 'STATUS_NAME', key: 'STATUS_NAME', width: 100, align: 'center' },
    { title: '说明', dataIndex: 'DESCRIPTION', key: 'DESCRIPTION', width: 350, align: 'center' },
    { title: '处理人', dataIndex: 'HANDLE_USER_NAME_EN', key: 'HANDLE_USER_NAME_EN', width: 150, align: 'center' },
    { title: '处理时间', dataIndex: 'HANDLE_DT', key: 'HANDLE_DT', width: 150, align: 'center' },
];

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                type_id: null,
                facebook_account_id: null,
                fb_id: null,
                fb_name: null,
                event_id: null,
                status_id: null,
                handle_dt: null,
                stat_dt: null,
                priority_level: null,
            },
            tableData: [],
            page: 1,
            size: 20,
            total: 0,
            loading: false,
        };
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        this.setState({
            loading: true,
        });
        monitor.getLists(this.state.page, this.state.size, this.state.form).then((res) => {
            if (res.data.tip_code) {
                const data = res.data.data;
                const tableData = data.infos;
                tableData.forEach((value, index) => {
                    tableData[index].num = this.state.size * (this.state.page - 1) + index + 1;
                });
                this.setState({
                    tableData: data.infos,
                    total: data.total,
                    loading: false,
                });
            }
        });
    };

    onChange = (page) =>{
        this.setState({
            page: page.current,
        });
        setTimeout(() => {
            this.getData();
        });
    };

    render() {
        return (
            <div className="common-wrapper">
                <div className="common-body flex-column">
                    <div className="find-wrapper flex0"></div>
                    <div className="table-wrapper flex1">
                        <Table
                            loading={this.state.loading}
                            rowKey="num"
                            Checkbox
                            bordered
                            columns={columns}
                            dataSource={this.state.tableData}
                            scroll={{ x: 1880 }}
                            pagination={{
                                defaultPageSize: 20,
                                total: this.state.total,
                            }}
                            onChange={this.onChange}
                            size="small"
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default Monitor;