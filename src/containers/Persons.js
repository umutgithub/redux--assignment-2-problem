import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.per.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={(pId) => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        per: state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
       onAddPerson: (name, age) => dispatch({type:'ADD', personData:{name: name, age: age}}),
       onDeletePerson : (pId) => dispatch({type:'DELETE', value: pId})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Persons);