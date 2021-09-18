import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
export default function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const res = fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    })
      .then((result) => result.json())
      .then((data) => setToken(data));
  }, []);

  const handleLogin = () => {
    token ? history.push("/dashboard") : <Redirect to="/login" />;
  };

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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Input.Password
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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

        <Button
          type="primary"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
          htmlType="submit"
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
