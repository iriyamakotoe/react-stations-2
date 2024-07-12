import React, {useState, useEffect} from 'react'

export const ThreadsList = (props) => {
  const listItems = props.threads.map((obj) =>
    <li key={obj.id}>{obj.title}</li>
  );
  return <>
    <ul className='threadList'>{listItems}</ul>
  </>
}

export default ThreadsList