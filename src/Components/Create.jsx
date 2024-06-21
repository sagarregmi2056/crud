import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const notify = () => toast("data added!");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [country, setCountry] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setTimeout(() => {
      navigate("/read");
    }, 3000);
    e.preventDefault();
    axios
      .post("https://66712b38e083e62ee43a5e4f.mockapi.io/crudd", {
        name,
        email,
        phone,
        address,
        city,
        state,
        zip,
        country,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <ToastContainer />
      <h1 className="text-center mt-5 ">Enter the details</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="card">
              <div className="card-body text-center">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Enter Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Enter City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      placeholder="Enter State"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="zip"
                      className="form-control"
                      placeholder="Enter Zip"
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="country"
                      className="form-control"
                      placeholder="Enter Country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      onClick={notify}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
