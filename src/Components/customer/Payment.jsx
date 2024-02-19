import React, { useEffect,useState } from 'react';
import axios from 'axios';


const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  let totalCartPrice = 0;

  const [error, setError] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8086/products/details/approved')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        setError({ message: error.message });
      });
  }, []);

  const handlePayment = async () => {
    try {
      const res = await axios.get('http://localhost:8086/orders/createTransaction/' + totalCartPrice); // Assuming the total amount is 500
      const { orderId, amount } = res.data;

      const razorpay = new window.Razorpay({
        key: 'rzp_test_BsCL4MHT2UPLIw',
        amount: totalCartPrice * 100, // Amount in paise
        currency: 'INR',
        name: 'Cafetto',
        description: 'Payment for your order',
        image: 'https://example.com/your_logo.png',
        order_id: orderId,
        handler: function (response) {
          setPaymentSuccess(true);
          alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'name',
          email: 'cafetto@cafe.com',
          contact: '9876543210',
        },
        notes: {
          address: 'Mumbai',
        },
        theme: {
          color: '#F37254',
        },
      });
      razorpay.open();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='py-4'>
        <div className='container'>
          <div className='row'>
            


            <div>
            {paymentSuccess ? (
                <p>Payment successful!</p>
            ) : (
                // <div>
                //   <h2>Payment</h2>
                //   {error && <p>Error: {error}</p>}
                //   <p>Product: Your Product</p>
                //   <p>Total: ₹500</p> {/* Assuming the total amount is ₹500 */}
                //   <button onClick={handlePayment}>Pay Online</button>
                // </div>
                <div className='col-md-5'>
                <table className='table table-bordered'>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {error.message ? (
                    <tr>
                        <td colSpan="4">Error loading data: {error.message}</td>
                    </tr>
                    ) : (
                    cartItems.map((item) => {
                        totalCartPrice += item.productPrice * item.quantity;
                        return (
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>{item.productPrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.productPrice * item.quantity}</td>
                        </tr>
                        );
                    })
                    )}
                    <tr>
                    <td colSpan="2" className='text-end fw-bold'>Grand Total</td>
                    <td colSpan="2" className='text-end fw-bold'>{totalCartPrice}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            )}
            <div className='col-md-12'>
                <div className='form-group text-end'>
                <button type='button' className='btn btn-primary mx-1'  onClick={handlePayment} >Place Order</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

  );
};

export default Payment;
