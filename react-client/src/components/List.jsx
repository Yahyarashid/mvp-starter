import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Of Your Publishments </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem delete ={props.delete} item={item}/>)}
  </div>
  
  
)

export default List;