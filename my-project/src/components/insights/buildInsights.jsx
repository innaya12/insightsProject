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

    upadteText = () =>{
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
            <div className={"wrapper"}>
                <div className={"titleDiv"}>
                    <h2 className={"title"}>{index}</h2>
                </div>
                <div className={"insideBox"}>
                    {inEditMode ?
                    <div className={"middleBox"}>
                        <textarea className={"form-control"} aria-label={"With textarea"} defaultValue={text} ref={this.textInput} />
                    </div> 
                    :
                    <div className={"middleBox"}>
                        <button  id={"menu"} onClick={this.onEdit}><i  className={"fa fa-ellipsis-h"} aria-hidden={"true"}></i></button>
                        <Link id={"middleBoxText"} to={`/insights/${index}`}>
                            <p>{text} </p> 
                        </Link>
                    </div>}
                    {inEditMode ?
                    <div className={"buttonWrapper"}>
                        <button id={"saveButton"} className={"edit btn btn-success"} onClick={this.upadteText}>שמירה</button>
                        <button id={"cancelbutton"} className={"edit btn btn-success"} onClick={this.onEdit}>ביטול</button>
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