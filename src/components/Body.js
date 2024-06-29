import { people } from "../utils/data";

const Body = () =>{
      const listItem = people.map(person =>    //implicit return when we remove the curley braces // we have to return 
        
        <li key={person.id}>
            <p>his name is {person.name}</p>
            <p>his profession is {person.profession}</p>
        </li>
      )
    return(
        <div>
            <h1>Body</h1>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name="Name" id="" />
                <ul>{listItem}</ul>
                
            </form>
        </div>
    )
}
export default Body;
