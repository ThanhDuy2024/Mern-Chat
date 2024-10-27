import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Sidebar() {
  const rooms = ['first room', 'second room', 'third room']
  return (
    <>
      <h2>Available room</h2>
      <ListGroup>
        {rooms.map((item, idx) => {
          return <ListGroupItem key={idx}>{item}</ListGroupItem>
        })}
      </ListGroup>
      <h2>Members</h2>

    </>
  )
}

export default Sidebar;