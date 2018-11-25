import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4>Your Publishments </h4>
    { props.items.map(item => <ListItem delete ={props.delete} item={item}/>)}
  </div>
  
  
)

export default List;