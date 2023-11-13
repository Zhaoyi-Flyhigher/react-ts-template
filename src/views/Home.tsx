import React, { useState } from "react";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/home";
import { Button, Input } from "antd";
import "../style/home.less";
const Home: React.FC = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const [inputValue, setInputValue] = useState<number>(2);
    const dispatch = useDispatch();
    const handleChange = (e: any) => {
        const val = Number(e.target.value);
        setInputValue(val);
    };
    return (
        <div className="home-container">
            <p>这里是Home页</p>
            <p>{value}</p>
            <p>累加：<Input className="number" value={inputValue} placeholder="数字" onChange={handleChange} /></p>
            <div className="btn-list">
                <Button
                    className="btn"
                    type="primary"
                    onClick={() => dispatch(increment())}>
                    Add
                </Button>
                <Button
                    className="btn"
                    type="primary"
                    onClick={() => dispatch(decrement())}>
                    Reduce
                </Button>
                <Button
                    className="btn"
                    type="primary"
                    onClick={() => dispatch(incrementByAmount(inputValue))}>
                    Accumulation
                </Button>
            </div>
        </div>
    );
};
export default Home;