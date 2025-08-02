import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import bank_logo from "../Components/Assets/Bank.png";
import paypal from "../Components/Assets/Paypal.png";
import cod from "../Components/Assets/COD.png";
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [province, setProvince] = useState("");
  const [shipping, setShipping] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    phone: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const shippingRates = {
    punjab: 10,
    sindh: 20,
    kpk: 15,
    balochistan: 25,
    "gilgit baltistan": 18,
  };

  const subTotal = cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);

  useEffect(() => {
    const selectedShipping = shippingRates[province.toLowerCase()] || 0;
    setShipping(selectedShipping);
  }, [province]);

  const total = subTotal + shipping;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const validateForm = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.address1.trim() &&
      formData.zip.trim() &&
      province.trim() &&
      formData.city.trim() &&
      formData.phone.trim() &&
      formData.email.trim()
    );
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!paymentMethod) return alert("Please select a payment method");
    if ((paymentMethod === 'paypal' || paymentMethod === 'bank') && !Object.values(paymentInfo).every(Boolean)) {
      return alert("Please fill out the payment form");
    }
    if (validateForm()) {
      alert("Your order has been placed")
      navigate("/order-status");
      dispatch(clearCart());
    }
  setSubmitted(true);
  };

  const openPaymentForm = (method) => {
    setPaymentMethod(method);
    if (method === 'paypal' || method === 'bank') {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='container rounded-lg mx-auto px-4 mt-40'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8'>
        <div className='flex flex-col gap-8 lg:col-span-2 py-4 px-4 md:px-8 border border-gray-200 rounded-md md:pl-12 '>
          <h1 className='text-2xl sm:text-4xl text-gray-800 font-semibold'>Shipping Address</h1>
           <form onSubmit={handlePlaceOrder} className='flex flex-col gap-8'>
            {/* First Name */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="firstName">First Name</label>
              <input className='py-2 w-60 sm:w-96 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="text" id='firstName' value={formData.firstName} onChange={handleInputChange} />
              {submitted && !formData.firstName && <p className="text-red-500">Required</p>}
            </div>

            {/* Last Name */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="lastName">Last Name</label>
              <input className='py-2 w-60 sm:w-96 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="text" id='lastName' value={formData.lastName} onChange={handleInputChange} />
              {submitted && !formData.lastName && <p className="text-red-500">Required</p>}
            </div>

            {/* Address 1 */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="address1">Address 1</label>
              <input className='py-2 w-60 sm:w-96 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="text" id='address1' value={formData.address1} onChange={handleInputChange} />
              {submitted && !formData.address1 && <p className="text-red-500">Required</p>}
            </div>

            {/* Address 2 (Optional) */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="address2">Address 2</label>
              <input className='py-2 w-60 sm:w-96 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="text" id='address2' value={formData.address2} onChange={handleInputChange} placeholder='(Optional)' />
            </div>

            {/* Zip */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="zip">Zip Code</label>
              <input className='py-2 w-40 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="number" id='zip' value={formData.zip} onChange={handleInputChange} />
              {submitted && !formData.zip && <p className="text-red-500">Required</p>}
            </div>

            {/* Province */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="province">Province</label>
              <select className='border w-60 rounded-md sm:w-96 px-6 py-2 text-gray-600 focus:outline-none focus:border-blue-500'
                value={province} onChange={(e) => setProvince(e.target.value)}>
                <option value="">Select Province</option>
                <option value="punjab">Punjab</option>
                <option value="sindh">Sindh</option>
                <option value="kpk">KPK</option>
                <option value="balochistan">Balochistan</option>
                <option value="gilgit baltistan">Gilgit Baltistan</option>
              </select>
              {submitted && !province && <p className="text-red-500">Required</p>}
            </div>

            {/* City */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="city">City</label>
              <input className='py-2 w-40 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="text" id='city' value={formData.city} onChange={handleInputChange} />
              {submitted && !formData.city && <p className="text-red-500">Required</p>}
            </div>

            {/* Phone */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="phone">Phone Number</label>
              <input className='py-2 w-60 sm:w-96 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="tel" id='phone' value={formData.phone} onChange={handleInputChange} />
              {submitted && !formData.phone && <p className="text-red-500">Required</p>}
            </div>

            {/* Email */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <label className='text-gray-600' htmlFor="email">Email</label>
              <input className='py-2 w-60 sm:w-96 px-6 border rounded-md focus:outline-none focus:border-blue-500'
                type="email" id='email' value={formData.email} onChange={handleInputChange} />
              {submitted && !formData.email && <p className="text-red-500">Required</p>}
            </div>
            <button 
               type='submit'
              className='bg-gray-700 border border-gray-700 py-3 text-lg px-2 sm:px-4 w-full sm:w-1/2 rounded-md text-white hover:bg-transparent hover:text-gray-700 transform transition duration-700'>
              Place order
            </button>
          </form>         
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 border border-gray-200 p-8 rounded-md'>
            <div className='flex justify-between'><p className='text-gray-600 font-semibold'>Subtotal:</p><p className='text-gray-700 font-semibold'>${subTotal}</p></div>
            <div className='flex justify-between'><p className='text-gray-600 font-semibold'>Shipping:</p><p className='text-gray-600 font-semibold'>{shipping ? `$${shipping}` : "Select Province"}</p></div>
            <hr />
            <div className='flex justify-between font-semibold'><p>You Pay:</p><p>${total}</p></div>
            <div className='flex flex-col gap-1'>
              <div className='font-semibold mb-4'>Select Payment Method</div>
              <div className='flex justify-between'>
                <img className='w-20 cursor-pointer' onClick={() => openPaymentForm("bank")} src={bank_logo} alt="bank-logo" />
                <img className='w-20 cursor-pointer' onClick={() => openPaymentForm("paypal")} src={paypal} alt="paypal-logo" />
                <img className='w-20 cursor-pointer' onClick={() => openPaymentForm("cash")} src={cod} alt="cod-logo" />
              </div>
            </div>
            <Link to='/cart'>
              <button className='bg-gray-700 w-full text-white px-4 py-2 border rounded-md border-gray-700 hover:text-gray-700 hover:bg-transparent transition duration-700'>
                Edit Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-12 py-4'>
        <p className='text-gray-800 font-semibold text-lg'>Have a promo code? Apply here</p>
        <div className='flex'>
          <input className='focus:outline-none focus:border-blue-500 border-2 px-4 sm:px-6 py-2 rounded-md' type="text" placeholder='Enter promo code' />
          <button className='bg-gray-700 text-white border px-2 sm:px-4 py-2 rounded-md font-bold border-gray-700 hover:text-gray-700 hover:bg-transparent transform transition duration-500'>
            Apply
          </button>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg p-6 w-11/12 max-w-md relative'>
            <button onClick={closePopup} className='absolute top-2 right-2 text-gray-500 text-lg'>✖</button>
            {paymentMethod === "paypal" && (
              <div>
                <h2 className='text-xl font-semibold mb-4'>PayPal Details</h2>
                <input name="paypalEmail" onChange={handlePaymentInputChange} placeholder="PayPal Email" className='w-full mb-2 border rounded px-4 py-2' />
                <input name="confirmEmail" onChange={handlePaymentInputChange} placeholder="Confirm Email" className='w-full mb-2 border rounded px-4 py-2' />
              </div>
            )}
            {paymentMethod === "bank" && (
              <div>
                <h2 className='text-xl font-semibold mb-4'>Bank Transfer Details</h2>
                <input name="fullName" onChange={handlePaymentInputChange} placeholder="Full Name" className='w-full mb-2 border rounded px-4 py-2' />
                <input name="bankName" onChange={handlePaymentInputChange} placeholder="Bank Name" className='w-full mb-2 border rounded px-4 py-2' />
                <input name="accountNumber" onChange={handlePaymentInputChange} placeholder="Account Number" className='w-full mb-2 border rounded px-4 py-2' />
                <input name="ifsc" onChange={handlePaymentInputChange} placeholder="IFSC/SWIFT Code" className='w-full mb-2 border rounded px-4 py-2' />
              </div>
            )}
            <button onClick={closePopup} className='bg-gray-700 text-white px-4 py-2 rounded-md mt-4 w-full'>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
