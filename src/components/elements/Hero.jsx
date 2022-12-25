import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const Hero = () => {

  const [customer, setCustomer] = useState([]);
  const userCollectionRef = collection(db, "customer");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setCustomer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));    
    };
    getUsers();
  });


  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col-lg-8 mx-auto border my-5">
            <table className="table">
              <thead>
                <tr>
                 
                  <th scope="col">Value:</th>
                  <th scope="col">Transaction Fee:</th>
                  <th scope="col">Gas Price:</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                customer.map((customer) => {
                  return (
                    <tr>
                      
                      <td> {customer.dollars}</td>
                      <td>{customer.transactionFee}</td>                    
                      <td>{customer.gasPrice}</td>                  
                     
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
