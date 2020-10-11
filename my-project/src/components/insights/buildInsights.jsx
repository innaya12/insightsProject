import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

class BuildInsights extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            inEditMode : false,
            index: '',
            stats:'',
            text: ''
        }
        this.textInput = React.createRef();
    };

    componentDidMount = () =>{
        if (this.props.id){
            const {id, data, statistics} = this.props;
            this.setState({
                index: id,
                stats : statistics.publishedContributionsPercent,
                text: data
            })
        }else {
            const {text, index, stats} = this.props;
            this.setState({
                index,
                stats,
                text
            })
        }
    }
    
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
        const {inEditMode, index, stats, text} = this.state;
        
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