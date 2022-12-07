import React from "react";
import { Select, Table } from "antd";

const Tables = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: '30%',
        },
        {
          title: <Select siza={"large"}
          style={{
            width: 130,
          }}
          bordered={false}
          name=""
          id=""
          defaultValue={"Kunni tanlang"}
          onChange={handleChange}>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="5">5</Select.Option>
            <Select.Option value="6">6</Select.Option>
            <Select.Option value="7">7</Select.Option>
            <Select.Option value="8">8</Select.Option>
            <Select.Option value="9">9</Select.Option>
            <Select.Option value="10">10</Select.Option>
          </Select>,
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
