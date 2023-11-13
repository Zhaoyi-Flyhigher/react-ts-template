import React from "react";
import { Outlet, useNavigate  } from "react-router-dom";
import { Button, Divider } from "antd";
import "./style/app.less";
const App: React.FC = () => {
    const navigate = useNavigate();
    const jump = (path: string) => {
        navigate(path);
    };
    return (
        <div className="container">
            <h1 className="title">欢迎使用当前React模板</h1>
            <p>基于React@18，React-Router-dom@6, redux@8, antd@5</p>
            <p>内部集成了TypeScript类型校验，eslint检查</p>
            <Divider className="divider">路由</Divider>
            <div className="jump-btn">
                <Button 
                    className="btn" 
                    type="primary"
                    onClick={() => jump("/")}>
                    Go Home
                </Button>
                <Button 
                    className="btn" 
                    type="primary"
                    onClick={() => jump("/about")}>
                    Go About
                </Button>
            </div>
            <Divider className="divider">redux</Divider>
            <div className="children-container">
                <Outlet></Outlet>
            </div>
        </div>
    );
};
export default App;