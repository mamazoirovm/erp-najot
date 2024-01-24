import React from "react";
import { Table, Tooltip } from "antd";
const columns = [
  {
    title: "Buyurtma",
    dataIndex: "age",
    key: "age",
    width: 180,
  },
  {
    title: "Guruh nomi",
    dataIndex: "name",
    key: "name",
    render: (text) => <span className="name">{text}</span>,
    width: 420,
  },

  {
    title: "Holati",
    dataIndex: "address",
    key: "address 1",
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <a className="a_link" style={{ padding: '6px 8px'  , background: "#1373F8", color: "#fff", borderRadius: '4px'}} href="#">
         {address}
        </a>
      </Tooltip>
    ),
  },
  {
    title: "Lesson start Date",
    dataIndex: "startDate",
    key: "address ",
  },
  {
    title: "Lesson end  Date",
    dataIndex: "endDate",
    key: "address 3",
  },
  {
    title: "Info",
    dataIndex: "address",
    key: "address 4",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        <a className="a_link" style={{ padding: '6px 8px'  , background: "#bc8e5b", color: "#fff", borderRadius: '4px'}} href="#">
          ....
        </a>
      </Tooltip>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Frontend React.JS(Standart)FN12",
    age: 1,
    address: "Active",
    startDate: "14 AUG 2023",
    endDate: "01 APR 2023",
  },
  {
    key: "2",
    name: "Frontend React.JS(Standart)FN11",
    age: 2,
    address: "Active",
    startDate: "09 AUG 2023",
    endDate: "27 MARCH 2023",
  },
  {
    key: "3",
    name: "Frontend React.JS(Standart)FN9",
    age: 3,
    address: "Active",
    startDate: "1 JULY 2023",
    endDate: "13 FEV 2024",
  },
];
const Tables = () => <Table columns={columns} dataSource={data} />;
export default Tables;
