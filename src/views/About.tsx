import React from "react";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { updateText } from "../store/about";
import { Input } from "antd";

const About: React.FC = () => {
    const { text } = useSelector((state: RootState) => state.about);
    const dispatch = useDispatch();
    const handlerChange = (e: any) => {
        const val = e.target.value;
        dispatch(updateText(val));
    };
    return (
        <div>
            <p>{text}</p>
            <div>
                输入文案：
                <Input 
                    style={{"width": "200px"}}
                    value={text} 
                    placeholder="输入文案"
                    onChange={handlerChange}/>
            </div>
        </div>
    );
};
export default About;