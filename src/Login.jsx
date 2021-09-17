import React,{useState} from "react";
import Dashboard from "./Dashboard"
import { Form, Input, Button, Checkbox } from "antd";
import {useHistory} from "react-router-dom";
export default function Login() {
let history=useHistory();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);

const handleLogin=()=>{
  history.push("/dashboard");
}

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input 
        type="text"
        value={username}
        onChange={e=>setUsername(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password  type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item
      
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <a className="login-form-forgot" href="">
        Forgot your password?
        </a>
        <div>
          <a className="login-form-forgot" href="">
           Have you not registered before?
          </a>
        </div>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      {error && <div className="error">{error}</div>}

        <Button type="primary" value={loading ? "Loading..." : "Login"} 
        disabled={loading} htmlType="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
