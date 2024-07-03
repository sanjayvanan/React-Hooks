import {people} from '../utils/data'

const ListItems = (props) => {
    const listItem = people.map(person =>    //implicit return when we remove the curley braces // we have to return if we put the curley braces
        
        <li key={person.id}>
            <p>his name is {props.name}</p>
            <p>his profession is {props.profession}</p>
        </li>
      )
    return ( 
        <ul>
        {listItem}
        </ul>
     );
}
 
export default ListItems;