/**
 * Created by usevil on 4/2/18.
 */

const initialState = {
    persons: []
}

const reducer = ( state = initialState, action ) => {
   switch (action.type) {
       case 'ADD' :
           const newPerson = {
               id: Math.random(),
               name: 'Max',
               age: Math.floor( Math.random() * 40 )

           };
           return {
            ...state,
               persons : state.persons.concat(newPerson)
           }
       case 'DELETE' :
           const newPersonArray = state.persons.filter(item => item.id !== action.value);
           return {
            ...state,
              persons : newPersonArray
           }
    }

    return state;

}

export default reducer;