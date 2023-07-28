// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BookingTable.css'; // Import the CSS file for styling

// export function BookingTable() {
//   const [bookings, setBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [formData, setFormData] = useState({
//     customer: '',
//     service: '',
//     bikeStation: '',
//     date: '',
//     status: '',
//   });

//   useEffect(() => {
//     // Fetch the bookings data from the backend API and update the state
//     fetchBookings();
//   }, []);

  

//   const fetchBookings = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage after login
//       if (!token) {
//         console.error('Token not found');
//         return;
//       }
  
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/bookings/getAllBookings`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
  
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     }
//   };
  

//   const handleEditBooking = (booking) => {
//     setSelectedBooking(booking);
//     setFormData({
//       customer: booking.customer,
//       service: booking.service,
//       bikeStation: booking.bikeStation,
//       date: booking.date,
//       status: booking.status,
//     });
//   };

//   const handleCreateBooking = () => {
//     setSelectedBooking(null);
//     setFormData({
//       customer: '',
//       service: '',
//       bikeStation: '',
//       date: '',
//       status: '',
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (selectedBooking) {
//         // If selectedBooking is not null, it means we are editing an existing booking
//         await axios.put(`${process.env.REACT_APP_BASE_URL}/bookings/${selectedBooking._id}`, formData);
//         setSelectedBooking(null);
//       } else {
//         // If selectedBooking is null, it means we are creating a new booking
//         await axios.post(`${process.env.REACT_APP_BASE_URL}/bookings`, formData);
//       }

//       // Fetch the updated bookings data after edit/create
//       fetchBookings();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const handleDeleteBooking = async (bookingId) => {
//     try {
//       await axios.delete(`${process.env.REACT_APP_BASE_URL}/bookings/${bookingId}`);
//       // Fetch the updated bookings data after deletion
//       fetchBookings();
//     } catch (error) {
//       console.error('Error deleting booking:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="booking-container">
//       <table className="booking-table">
//         <thead>
//           <tr>
//             <th>Customer</th>
//             <th>Service</th>
//             <th>Bike Station</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking._id}>
//               <td>{booking.customer}</td>
//               <td>{booking.service}</td>
//               <td>{booking.bikeStation}</td>
//               <td>{booking.date}</td>
//               <td>{booking.status}</td>
//               <td>
//                 <button onClick={() => handleEditBooking(booking)}>Edit</button>
//                 <button onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="booking-form" style={{paddingLeft:"5em",paddingBottom:".5em"}}>
//         <form onSubmit={handleSubmit}>
//           <div style={{padding:".8em"}}>
//           <label style={{paddingRight:"2em"}}>Customer:</label>
//             <input type="text" name="customer" value={formData.customer} onChange={handleChange} />
          
//           </div>
          
//           <div style={{padding:".8em"}}>
//           <label style={{paddingRight:"3em"}}>
//             Service:</label>
//             <input type="text" name="service" value={formData.service} onChange={handleChange} />
          
//           </div>
          
//           <div style={{padding:".8em"}}>
//           <label style={{paddingRight:"1em"}}>Bike Station:</label>
//             <input type="text" name="bikeStation" value={formData.bikeStation} onChange={handleChange} />
          
//           </div>
          
//           <div style={{padding:".8em"}}>
//           <label style={{paddingRight:"4.2em"}}>Date:</label>
//             <input type="date" name="date" value={formData.date} onChange={handleChange} style={{padding:"1em 2.5em"}}/>
          
//           </div>
//           <div style={{padding:".8em"}}>
//           <label style={{paddingRight:"3.5em"}}>Status:</label>
//             <input type="text" name="status" value={formData.status} onChange={handleChange} />
          
//           </div><br/>
          
//           <button style={{marginLeft:"2em"}}type="submit">Submit</button>&nbsp;&nbsp;&nbsp;
//           <button onClick={handleCreateBooking}>Create New Booking</button>
//         </form>
        
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingTable.css'; // Import the CSS file for styling

export function BookingTable() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [formData, setFormData] = useState({
    customer: '',
    service: '',
    bikeStation: '',
    date: '',
    status: '',
  });

  useEffect(() => {
    // Fetch the bookings data from the backend API and update the state
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage after login
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/bookings/getAllBookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleEditBooking = (booking) => {
    setSelectedBooking(booking);
    setFormData({
      customer: booking.customer,
      service: booking.service,
      bikeStation: booking.bikeStation,
      date: booking.date,
      status: booking.status,
    });
  };

  const handleCreateBooking = () => {
    setSelectedBooking(null);
    setFormData({
      customer: '',
      service: '',
      bikeStation: '',
      date: '',
      status: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format the date to the desired format (YYYY-MM-DDTHH:mm:ss.sssZ)
      const formattedDate = new Date(formData.date).toISOString();
  
      if (selectedBooking) {
        // If selectedBooking is not null, it means we are editing an existing booking
        await axios.put(`${process.env.REACT_APP_BASE_URL}/bookings/update/${selectedBooking._id}`, {
          ...formData,
          date: formattedDate, // Set the formatted date in the request body
        });
      } else {
        // If selectedBooking is null, it means we are creating a new booking
        await axios.post(`${process.env.REACT_APP_BASE_URL}/bookings`, {
          ...formData,
          date: formattedDate, // Set the formatted date in the request body
        });
      }
  
      // Fetch the updated bookings data after edit/create
      fetchBookings();
  
      // Clear the form after successful submission
      setFormData({
        customer: '',
        service: '',
        bikeStation: '',
        date: '',
        status: '',
      });
  
      // Clear the selected booking
      setSelectedBooking(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="booking-container">
      <table className="booking-table">
        {/* Table header */}
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Bike Station</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.customer}</td>
              <td>{booking.service}</td>
              <td>{booking.bikeStation}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => handleEditBooking(booking)}>Edit</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="booking-form" style={{ paddingLeft: "5em", paddingBottom: ".5em" }}>
        {/* Booking form */}
        <form onSubmit={handleSubmit}>
          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "2em" }}>Customer:</label>
            <input type="text" name="customer" value={formData.customer} onChange={handleChange} />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "3em" }}>Service:</label>
            <input type="text" name="service" value={formData.service} onChange={handleChange} />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "1em" }}>Bike Station:</label>
            <input type="text" name="bikeStation" value={formData.bikeStation} onChange={handleChange} />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "4.2em" }}>Date:</label>
            <input type="string" name="date" value={formData.date} onChange={handleChange} />
          </div>

          <div style={{ padding: ".8em" }}>
            <label style={{ paddingRight: "3.5em" }}>Status:</label>
            <input type="text" name="status" value={formData.status} onChange={handleChange} />
          </div><br />

          <button style={{ marginLeft: "2em" }} type="submit">Submit</button>&nbsp;&nbsp;&nbsp;
          <button onClick={handleCreateBooking}>Create New Booking</button>
        </form>
      </div>
    </div>
  );
}
