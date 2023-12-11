import "../App.css";
import { Button, Table, Modal, Input, DatePicker } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import 'antd/dist/reset.css'
import moment from 'moment'; 

function TableDemo() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Java",
      number: "76756",
      department: "Computer Engineering",
      specialty: "IT",
      startDate: "2023-06-01",
      endDate: "2023-12-31"
    },
    {
      id: 2,
      name: "Software",
      number: "2142",
      department: "Computer Engineering",
      specialty: "IT",
      startDate: "2023-06-01",
      endDate: "2023-12-31"
    },
    {
      id: 3,
      name: "Algorithm",
      number: "9864",
      department: "Computer Engineering",
      specialty: "IT",
      startDate: "2023-06-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      name: "OS",
      number: "12313",
      department: "Computer Engineering",
      specialty: "IT",
      startDate: "2023-06-01",
      endDate: "2023-12-31"
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Subject Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Subject Number",
      dataIndex: "number",
    },
    {
      key: "4",
      title: "Department",
      dataIndex: "department",
    },
    {
      key: "5",
      title: "Specialty",
      dataIndex: "specialty",
    },
    {
      key: "6",
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      key: "7",
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      key: "8",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditSubject(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteSubject(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddSubject = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newSubject = {
      id: randomNumber,
      name: "Name " + randomNumber,
      number: randomNumber,
      department: "New Department",
      specialty: "New Specialty",
      startDate: "",
      endDate: ""
    };
    setDataSource((prev) => [...prev, newSubject]);
  };

  const onDeleteSubject = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this subject?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => prev.filter((subject) => subject.id !== record.id));
      },
    });
  };

  const onEditSubject = (record) => {
    setIsEditing(true);
    setEditingSubject({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingSubject(null);
  };

  const saveEditing = () => {
    setDataSource((prev) =>
      prev.map((subject) => {
        if (subject.id === editingSubject.id) {
          return editingSubject;
        } else {
          return subject;
        }
      })
    );
    resetEditing();
  };

  return (
    <div className="App">
      <Button
        onClick={onAddSubject}
        style={{ backgroundColor: '#0078AA', color: '#FFFFFF' }}
      >
        Add a new Subject
      </Button>
      <Table columns={columns} dataSource={dataSource} style={{ marginLeft: '10rem' }}/>
      <Modal
        title="Edit Subject"
        visible={isEditing}
        okText="Save"
        onCancel={resetEditing}
        onOk={saveEditing}
        okButtonProps={{ style: { backgroundColor: '#0078AA', color: '#FFFFFF' } }}
      >
        <Input
          value={editingSubject?.name}
          onChange={(e) => {
            setEditingSubject((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <Input
          value={editingSubject?.number}
          onChange={(e) => {
            setEditingSubject((prev) => ({ ...prev, number: e.target.value }));
          }}
        />
        <Input
          value={editingSubject?.department}
          onChange={(e) => {
            setEditingSubject((prev) => ({ ...prev, department: e.target.value }));
          }}
        />
        <Input
          value={editingSubject?.specialty}
          onChange={(e) => {
            setEditingSubject((prev) => ({ ...prev, specialty: e.target.value }));
          }}
        />
         <DatePicker
        value={editingSubject?.startDate ? moment(editingSubject.startDate) : null}
        onChange={(date) => {
          setEditingSubject((prev) => ({
            ...prev,
            startDate: date ? date.format('YYYY-MM-DD') : '',
          }));
        }}
      />
      <DatePicker
        value={editingSubject?.endDate ? moment(editingSubject.endDate) : null}
        onChange={(date) => {
          setEditingSubject((prev) => ({
            ...prev,
            endDate: date ? date.format('YYYY-MM-DD') : '',
          }));
        }}
      />
      </Modal>
    </div>
  );
}

export default TableDemo;
