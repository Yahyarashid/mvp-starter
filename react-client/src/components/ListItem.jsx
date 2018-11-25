import React from 'react';

const ListItem = (props) => (
  <div  className='component'>
  <p className="card-panel hoverable">
    { props.item.posts }
    </p><button>delete</button>
  </div>
)

export default ListItem;