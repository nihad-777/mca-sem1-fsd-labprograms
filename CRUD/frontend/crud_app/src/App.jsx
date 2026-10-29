
import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/users';

export default function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${API}/${editId}`, form);
    } else {
      await axios.post(API, form);
    }

    setEditId(null);
    setForm({ name: '', email: '' });
    fetchUsers();
  };

  const handleEdit = (u) => {
    setForm({ name: u.name, email: u.email });
    setEditId(u.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <header>
        <h1>User Management</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="John Doe"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <button type="submit">
            {editId ? 'Update User' : 'Add User'}
          </button>
        </form>

        <h2>User Directory</h2>

        {users.length ? (
          users.map((u) => (
            <div key={u.id}>
              <h3>{u.name}</h3>
              <p>{u.email}</p>
              <small>ID: {u.id}</small>

              <div>
                <button onClick={() => handleEdit(u)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(u.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </main>
    </div>
  );
}
