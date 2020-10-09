import React from 'react';
import {Link} from "react-router-dom";

import './style.css';


class BuildInsights extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            inEditMode : false,
            text : this.props.text
        }
        this.textInput = React.createRef();
    };

    onEdit = () =>{
        this.setState({
            inEditMode: !this.state.inEditMode
        })
    }

    upadteText = (e) =>{
        let newText = this.textInput.current.value;
        this.setState({
            inEditMode: false,
            text : newText
        })
    }

    render(){
        const {index, stats} = this.props;
        const {inEditMode, text} = this.state;
        return (
            <div className={"box"}>
                <div className={"titleDiv"}>
                    <h2 className={"title"}>{index}</h2>
                </div>
                <div className={"insideBox"}>
                    {inEditMode ?
                    <div className={"middleBox"}>
                        <input type={"text"} defaultValue={text} ref={this.textInput} ></input>
                    </div> :
                    <Link to={`/insights/${index}`}>
                        <div className={"middleBox"}>
                        <button onClick={this.onEdit}><i className="fas fa-ellipsis-h"></i></button>
                        <p>{text} </p> 
                        </div>
                    </Link>}
                    {inEditMode ?
                    <div>
                        <button onClick={this.upadteText}>Edit</button>
                        <button onClick={this.onEdit}>cancel</button>
                    </div> :
                    <div className={"bottomBox"}>
                        <p>{stats}</p>
                    </div>}
                </div>
            </div>
        )
    }
}

export default BuildInsights;