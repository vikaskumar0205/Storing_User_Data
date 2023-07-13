
import './Lists.css';

const Lists=(props)=> {
  return (
    <li className='lists'>
      {props.username}({props.age} years old)
    </li>
  );
}

export default Lists;