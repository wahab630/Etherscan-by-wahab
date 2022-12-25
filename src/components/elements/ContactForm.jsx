import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [dollars, setDollars] = useState("");
  const [transactionFee, setTransactionFee] = useState("");
  const [gasPrice, setGasPrice] = useState("");

  const handleSumit = () => {
    addDoc(
      collection(db, "customer"),
      {
        dollars,
        transactionFee,
        gasPrice,
      },
      setDollars(""),
      setTransactionFee(""),
      setGasPrice("")
    ).then(() => console.log("data saved"));
  };

  return (
    <>
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-center fw-bold">Enter Transaction Details</h1>
              <div>
                <div className="container">
                  <div>
                    <input
                      type="text"
                      id="fname"
                      name="Enter Value"
                      value={dollars}
                      placeholder="Value:"
                      onChange={(e) => setDollars(e.target.value)}
                    />
                    <input
                      type="text"
                      id="lname"
                      name="Transaction Fee:"
                      value={transactionFee}
                      placeholder="Transaction Fee:"
                      onChange={(e) => setTransactionFee(e.target.value)}
                    />
                    <input
                      type="text"
                      id="lname"
                      name="Gas Price:"
                      value={gasPrice}
                      placeholder="Gas Price:"
                      onChange={(e) => setGasPrice(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={handleSumit}>
                      Submit
                    </button>{" "}
                    <br /> <br />
                    <button className="btn btn-primary">
                      <Link
                        to="/hero"
                        className="text-white text-decoration-none"
                      >
                        Check Transaction Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
