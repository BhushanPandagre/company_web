// import React from "react";
// import { Container, Grid, Typography, IconButton } from "@mui/material";
// import {
//   Facebook,
//   Twitter,
//   Google,
//   Instagram,
//   LinkedIn,
//   GitHub,
//   Home,
//   Email,
//   Phone,
//   Print,
// } from "@mui/icons-material";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-gray-300 text-center text-lg-start py-6">
//       <div className="flex flex-col lg:flex-row justify-center lg:justify-between p-4 border-b border-gray-700">
//         <div className="mb-4 lg:mb-0">
//           <span>Get connected with us on social networks:</span>
//         </div>
//         <div className="flex space-x-4">
//           {[Facebook, Twitter, Google, Instagram, LinkedIn, GitHub].map(
//             (Icon, index) => (
//               <IconButton
//                 key={index}
//                 className="bg-pink-500 rounded-full p-3 shadow-lg transition transform hover:scale-110 hover:bg-pink-600"
//               >
//                 <Icon className="text-white text-2xl" />
//               </IconButton>
//             )
//           )}
//         </div>
//       </div>

//       <Container className="text-center text-md-start mt-5">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" className="font-bold text-white mb-2">
//               Company Name
//             </Typography>
//             <Typography variant="body2" className="text-gray-400">
//               Here you can use rows and columns to organize your footer content.
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             </Typography>
//           </Grid>

//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" className="font-bold text-white mb-2">
//               Products
//             </Typography>
//             {[
//               { name: "Angular", link: "#" },
//               { name: "React", link: "#" },
//               { name: "Vue", link: "#" },
//               { name: "Laravel", link: "#" },
//             ].map((product, index) => (
//               <Typography key={index} variant="body2" className="text-gray-400">
//                 <a href={product.link} className="hover:text-white">
//                   {product.name}
//                 </a>
//               </Typography>
//             ))}
//           </Grid>

//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" className="font-bold text-white mb-2">
//               Useful Links
//             </Typography>
//             {[
//               { name: "Pricing", link: "#" },
//               { name: "Settings", link: "#" },
//               { name: "Orders", link: "#" },
//               { name: "Help", link: "#" },
//             ].map((link, index) => (
//               <Typography key={index} variant="body2" className="text-gray-400">
//                 <a href={link.link} className="hover:text-white">
//                   {link.name}
//                 </a>
//               </Typography>
//             ))}
//           </Grid>

//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" className="font-bold text-white mb-2">
//               Contact
//             </Typography>
//             <Typography variant="body2" className="flex items-center gap-2 text-gray-400">
//               <Home /> New York, NY 10012, US
//             </Typography>
//             <Typography variant="body2" className="flex items-center gap-2 text-gray-400">
//               <Email /> info@example.com
//             </Typography>
//             <Typography variant="body2" className="flex items-center gap-2 text-gray-400">
//               <Phone /> +01 234 567 88
//             </Typography>
//             <Typography variant="body2" className="flex items-center gap-2 text-gray-400">
//               <Print /> +01 234 567 89
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>

//       <div className="text-center p-4 bg-gray-900 text-gray-400">
//         © 2025 Copyright
//         {/* <a className="font-bold text-white" href="https://mexdy.com">
//           mexdy.com
//         </a> */}
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6">
      <Container>
        <Typography variant="h6" className="mb-4 font-bold text-white">
          Connect with us on social media:
        </Typography>
        <div className="flex justify-center space-x-4 mb-6">
  {[Facebook, Twitter, Google, Instagram, LinkedIn, GitHub].map((Icon, index) => (
    <IconButton
      key={index}
      className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transform transition duration-300 hover:shadow-xl"
    >
      <Icon className="text-white text-2xl" />
    </IconButton>
  ))}
</div>


        <Grid container spacing={4} className="text-left">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="text-white mb-2">
              Company Name
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="text-white mb-2">
              Products
            </Typography>
            {["Angular", "React", "Vue", "Laravel"].map((product, index) => (
              <Typography key={index} variant="body2" className="text-gray-400">
                <a href="#" className="hover:text-white">
                  {product}
                </a>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="text-white mb-2">
              Useful Links
            </Typography>
            {["Pricing", "Settings", "Orders", "Help"].map((link, index) => (
              <Typography key={index} variant="body2" className="text-gray-400">
                <a href="#" className="hover:text-white">
                  {link}
                </a>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="text-white mb-2">
              Contact
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              New York, NY 10012, US
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              info@example.com
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              +01 234 567 88
            </Typography>
          </Grid>
        </Grid>

        <div className="text-center mt-6 p-4 bg-gray-800 text-gray-400">
          © 2024 Copyright:
          <a className="font-bold text-white" href="https://mexdy.com">
            Mexdy
          </a>
        </div>
      </Container>
    </footer>
  );
}
