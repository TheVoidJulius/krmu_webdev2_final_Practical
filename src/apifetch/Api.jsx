import { useEffect, useState } from 'react'
const Api = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setUsers(data)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div
      style={{
        padding: '20px',
        marginTop: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <h2>User List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              marginBottom: '15px',
              borderBottom: '1px solid #eee',
              paddingBottom: '10px',
            }}
          >
            <strong>User Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Api