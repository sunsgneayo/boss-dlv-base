import React, {Component} from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import html2canvas from 'html2canvas';
import { Button } from 'antd';


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

class Form extends Component {
    componentDidMount() {

    }


    render() {
        const creatImg = () => { // 绑定在某个点击事件
            html2canvas(document.getElementById('aphoto') as HTMLElement, {
                // aphoto为被截图节点id
                allowTaint: false,
                useCORS: true, // 支持跨域图片的截取，不然图片截取不出来
                // 图片服务器配置 Access-Control-Allow-Origin: *
            }).then(canvas => {
                const link = document.createElement('a'); // 建立一个超连接对象实例
                const event = new MouseEvent('click'); // 建立一个鼠标事件的实例
                link.download = 'img.png'; // 设置要下载的图片的名称
                link.href = canvas.toDataURL(); // 将图片的URL设置到超连接的href中
                link.dispatchEvent(event); // 触发超连接的点击事件
            })
        }


        const columns: ColumnsType<DataType> = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: (_, { tags }) => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                        <a>Invite {record.name}</a>
                        <a>Delete</a>
                    </Space>
                ),
            },
        ];

        const data: DataType[] = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];


        return (
            <>
                <div id='aphoto'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={data} />
                </div>

                <Button type="primary"  onClick={creatImg}>
                    保存表格为图片
                </Button>
            </>


        );
    }
}

export default Form;