import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: null
    }


    nameChangeHandler = (e) => {
        this.setState({name: e.target.value})
    };

    ageChangeHandler = (e) => {
        this.setState({age: e.target.value})
    };

    render() {
        return (
         <div className="AddPerson">
            <input type="text" placeholder="Name" value={this.state.name} onChange={this.nameChangeHandler}/>
            <input type="text" placeholder="Name" value={this.state.age}  onChange={this.ageChangeHandler}/>
            <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
        </div>

        )

    }
}



export default AddPerson;