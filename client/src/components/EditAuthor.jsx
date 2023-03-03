import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditAuthor() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const {id} = useParams();
  useEffect(()=>{
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, { name })
      .then(() => navigate("/authors"))
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
      });
  };

  return (
    <div className="card shadow">
      <div className="card-header">
        <h3 className="mb-0">Edit Author</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
            {errors?.name && (
              <span className="form-text text-danger">
                {errors?.name?.message}
              </span>
            )}
          </div>
          <div className="text-end">
            <button className="btn btn-primary">Edit Author</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAuthor;
