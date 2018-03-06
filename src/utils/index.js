import React from 'react'

export default function createList(movies) {
  const myList = [];
  for (var prop in movies.items) {
    if(myList.length < 13) {
      myList.push(<li key={prop}><p>{`${prop}: ${movies.items[prop]}`}</p></li>);
    }
  }
  return myList;
}
