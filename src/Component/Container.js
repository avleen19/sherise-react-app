import React, { useState } from 'react';
import './Container.css';

export const Container = () => {
  const [inp, setInp] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert('You are offline ... failed to load Razorpay');
      return;
    }

    const options = {
      key: "rzp_test_V9x23kACNEfICs", // Replace with your Razorpay key
      amount: inp * 100, // Convert to smallest currency unit
      currency: "INR",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UxowmmisT2CKJo5gzCmqYH7CEawFrb7ddw&s',
      name: "Anushka Malik",
      description: "Thanks for donation",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert('payment successfull !');
        // Handle post-payment operations here
      },
      prefill: {
        name: "Anushka Malik",
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <div className='dbox'>
        <img className='im' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspK79QiIonpbuLg_P-rsOeJFs2jmBCrPzZJu2LlRklOYTPYQrqQDn2DbnJi8cXN6pUuE&usqp=CAU' alt='no' />
        <input type="number" className='inpam' onChange={(e) => setInp(e.target.value)} value={inp} placeholder="Enter amount"/>
      </div>
      <button className='pay' onClick={() => displayRazorpay()}>Donate</button>
    </div>
  )
}


