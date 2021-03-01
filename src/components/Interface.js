import React, { Component } from 'react';
import './Interface.css'


class  Interface extends Component {
    state={
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0,10)

    }

    changeTime =(e) =>{
        this.setState({
            date: e.target.value
        })
    }

    getMaxDate =() =>{
        let daterange = new Date();
        daterange.setDate(daterange.getDate() + 365);
        return daterange.toISOString().slice(0,10);
    }

    
    handlechange =(e) =>{
        if(e.target.name === "check"){
            this.setState({
                checked: e.target.checked
            })
        }else{
            console.log("something else")
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        // const {text, checked, date} = this.state;


        if(this.state.text.length > 3){
            this.props.add(this.state.text, this.state.checked, this.state.date);
        }else{
            alert(`${this.state.text.length} znaki to za mała wartość dla tego pola`)
        }

        this.setState({
            text: " ",
            checked: false,
            date: new Date().toISOString().slice(0,10)
        })
    }
    render() { 

        return ( 
            <div className="interface">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor ="text">Nazwa zadania:</label>
                    <input type="text" id="text" value ={this.state.text} onChange ={this.handlechange}></input>
                    <br></br>
                    <br></br>
                    <input type="date" id ="date" onChange ={this.changeTime} value ={this.state.date} min={new Date().toISOString().slice(0,10)} max={this.getMaxDate()}></input>
                    <label htmlFor="check">Ważne?<input type="checkbox" id="checked" name="check" checked= {this.state.checked} onChange ={this.handlechange}></input></label>
                    <button type="submit">Dodaj zadanie</button>
                </form>
            </div>
        );
    }
}
 
export default Interface;