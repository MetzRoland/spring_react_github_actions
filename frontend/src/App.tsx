import { useState, useEffect } from 'react'

import './App.css'

interface User {
  id: number;
  username: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <>
      {users.map((user) => {
        return <p key={user.id}>{user.username}, {user.email}, {user.id}</p>
      })}
    </>
  )
}

export default App
