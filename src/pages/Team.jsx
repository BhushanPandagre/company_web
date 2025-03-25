import React from "react";
import { Container, Grid } from "@mui/material";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
    socials: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1376&auto=format&fit=crop",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Michael Johnson",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1376&auto=format&fit=crop",
    socials: {
      facebook: "https://facebook.com/michaeljohnson",
      twitter: "https://twitter.com/michaeljohnson",
      instagram: "https://instagram.com/michaeljohnson",
    },
  },
  {
    name: "Emily Davis",
    position: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1376&auto=format&fit=crop",
    socials: {
      facebook: "https://facebook.com/emilydavis",
      twitter: "https://twitter.com/emilydavis",
      instagram: "https://instagram.com/emilydavis",
    },
  },
];

const Team = () => (
  <Container maxWidth="lg" className="py-20 ">
    <h2 className="text-5xl font-bold text-blue-700 text-center mb-6">
      Meet Our Team
    </h2>
    <p className="text-gray-600 text-center mb-12 text-lg">
      Our dedicated team of professionals who drive innovation and success.
    </p>

    <Grid container spacing={4} justifyContent="center">
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card className="w-full bg-white shadow-xl rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <CardHeader floated={false} className="h-72 overflow-hidden rounded-t-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition duration-500 hover:scale-110 p-3"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2 font-semibold">
                {member.name}
              </Typography>
              <Typography color="blue-gray" className="text-md opacity-80">
                {member.position}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-5 pb-4">
              <Tooltip content="Facebook">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xl hover:text-blue-800 transition"
                >
                  <FaFacebookF />
                </a>
              </Tooltip>
              <Tooltip content="Twitter">
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xl hover:text-blue-600 transition"
                >
                  <FaTwitter />
                </a>
              </Tooltip>
              <Tooltip content="Instagram">
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-xl hover:text-pink-700 transition"
                >
                  <FaInstagram />
                </a>
              </Tooltip>
            </CardFooter>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Team;
