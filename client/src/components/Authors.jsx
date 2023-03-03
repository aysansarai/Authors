import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [loaded]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then(() => setLoaded(false))
      .catch((err) => console.log(err));
  };

  return (
    loaded && (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <Link
                  to={`/authors/${author._id}/edit`}
                  className="btn btn-warning me-2"
                >
                  Edit Author
                </Link>
                <button
                  onClick={() => handleDelete(author._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}

export default Authors;
