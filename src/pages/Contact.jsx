// // src/pages/Contact.js
// import React from "react";
// import { TextField, Button, Container, Grid, Paper } from "@mui/material";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const Contact = () => (
//   <Container maxWidth="lg" className="py-20">
//     <Paper elevation={3} className="p-8 rounded-xl shadow-lg bg-white">
//       <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">Contact Us</h2>
//       <p className="text-gray-600 text-center mb-10">
//         Get in touch with us for any inquiries or collaborations.
//       </p>
      
//       <Grid container spacing={4} alignItems="center">
//         {/* Left Side - Image */}
//         <Grid item xs={12} md={6}>
//           <img src="https://img.freepik.com/premium-photo/contact-us-business-icon-computer-keyboard-with-globe_117856-2468.jpg?semt=ais_hybrid" alt="Contact" className="w-full h-auto rounded-xl shadow-lg" />
//         </Grid>
        
//         {/* Right Side - Contact Form */}
//         <Grid item xs={12} md={6}>
//           <form className="space-y-6">
//             <TextField label="Name" fullWidth variant="outlined" />
//             <TextField label="Email" fullWidth variant="outlined" type="email" />
//             <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
//             <Button variant="contained" color="primary" fullWidth className="py-3">
//               Send Message
//             </Button>
//           </form>
//         </Grid>
//       </Grid>
//     </Paper>
//   </Container>
// );

// export default Contact;





// src/pages/Contact.js
import React from "react";
import { TextField, Button, Container, Grid, Paper } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => (
  <Container maxWidth="lg" className="py-20">
    <Paper elevation={3} className="p-8 rounded-xl shadow-lg bg-white">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">Contact Us</h2>
      <p className="text-gray-600 text-center mb-10">
        Get in touch with us for any inquiries or collaborations.
      </p>
      
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Image */}
        <Grid item xs={12} md={6}>
          <img src="https://img.freepik.com/premium-photo/contact-us-business-icon-computer-keyboard-with-globe_117856-2468.jpg?semt=ais_hybrid" alt="Contact" className="w-full h-auto rounded-xl shadow-lg" />
        </Grid>
        
        {/* Right Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <form className="space-y-6">
            <TextField label="Name" fullWidth variant="outlined" />
            <TextField label="Email" fullWidth variant="outlined" type="email" />
            <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
            <Button variant="contained" color="primary" fullWidth className="py-3">
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
      
      {/* Location Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Location</h3>
        <p className="text-gray-600">123 Tech Street, Innovation City, TX 75001</p>
        <p className="text-gray-600"><FaPhone className="inline mr-2" /> +1 (234) 567-890</p>
        <p className="text-gray-600"><FaEnvelope className="inline mr-2" /> contact@mexdytech.com</p>
        
        {/* Embedded Google Map */}
        <div className="mt-6">
          <iframe
            title="Google Map"
            className="w-full h-80 rounded-xl shadow-lg"
            src="https://maps.app.goo.gl/faQiUV68baLzWrie9"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Paper>
  </Container>
);

export default Contact;

