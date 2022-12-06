import React from "react";
import { Table } from "antd";

const Tables = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: '30%',
        },
        {
          title: 'Daily',
          dataIndex: 'age',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Overall',
          dataIndex: 'overall',
          sorter: (a, b) => a.age - b.age,
          width: '40%',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          overall: 100,
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          overall: 100,
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          overall: 100,
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          overall: 100,
        },
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
};

export default Tables;
