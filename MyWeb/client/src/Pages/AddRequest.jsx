import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddRequest() {
  const [imagePercent, setImagePercent] = useState(0);
  const fileRef1 = useRef(null);
  const [imageError, setImageError] = useState(false);
  const [image1, setImage1] = useState(undefined);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    userId: currentUser._id,
    name: "",
    user_email: "",
    contact: "",
    project_type: "",
    budget_range: "",
    project_timeline: "",
    preferred_communication_mode: "",
    project_details: "",
    profilePicture: ""
  });

  useEffect(() => {
    if (image1) {
      handleFileUpload(image1, 'profilePicture');
    }
  }, [image1]);



  const handleFileUpload = async (image, field) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
        setError('Image upload failed');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prev) => ({
            ...prev,
            [field]: downloadURL
          }));
        });
      }
    );
  };

  const handleImage1Click = () => {
    fileRef1.current.click();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/createRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to create item');
      }

      alert('request create successfully');
       navigate('/OwnRequests');
    } catch (error) {
      setError('Something went wrong!');
    }
  };

  
  return (
  <div className="container mt-5">
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#007bff",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Create Request
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your Name"
            className="form-control"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Contact"
            className="form-control"
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
        </div>
        <label>Select Project Type</label>
        <div className="mb-3">
          <select
            className="form-select"
            placeholder="Project Type"
            onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
          >
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Web Hosting Solutions</option>
            <option>E-commerce Solutions</option>
            <option>Other</option>
          </select>
        </div>
        <label>Select Budget range</label>
        <div className="mb-3">
          <select
            className="form-select"
            placeholder="Budget range"
            onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
          >
            <option>Below $500</option>
            <option>$500 - $1,000</option>
            <option>$1,000 - $5,000</option>
            <option>Above $5,000</option>
          </select>
        </div>
        <label>Select Project Timeline</label>
        <div className="mb-3">
          <select
            className="form-select"
            placeholder="Project Timeline"
            onChange={(e) => setFormData({ ...formData, project_timeline: e.target.value })}
          >
            <option>Less than 1 month</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>Flexible</option>
          </select>
        </div>

   
        <div className="mb-3">
        <label for="communicationMode"  class="form-label">Select Communicationm Mode</label>
          <select
            className="form-select"
            onChange={(e) =>
              setFormData({ ...formData, preferred_communication_mode: e.target.value })
            }
          >
            <option>Email</option>
            <option>Phone</option>
            <option>Video Call</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Project Details"
            rows="4"
            onChange={(e) =>
              setFormData({ ...formData, project_details: e.target.value })
            }
          />
        </div>
        <input type='file' ref={fileRef1} id='profilePicture' hidden accept='image/*' onChange={(e) => setImage1(e.target.files[0])} />

        <div className="mb-3">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleImage1Click}
          >
            Upload File("PDF, DOC, DOCX, PNG, JPG")
          </button>
        </div>
        <div className="text-center">
          <img
            src={
              formData.profilePicture ||
              "https://media.istockphoto.com/id/1294866141/vector/picture-reload.jpg?s=612x612&w=is&k=20&c=Ei6q4n6VkP3B0R30d1VdZ4i11CFbyaEoAFy6_WEbArE="
            }
            alt="Profile"
            onClick={handleImage1Click}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "3px solid #007bff",
              cursor: "pointer",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="mb-3">
          {imageError ? (
            <span className="text-danger">Error uploading image (file size must be less than 2 MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span>{`Uploading: ${imagePercent}%`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-success">Image uploaded successfully</span>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Submit
        </button>
        <div className="mt-3">
       
        </div>
      </form>
      {error && (
        <p className="text-danger text-center mt-3" style={{ fontSize: "1rem" }}>
          {error}
        </p>
      )}
    </div>
  </div>
  
  );
}
