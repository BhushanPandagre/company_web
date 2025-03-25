// src/pages/Careers.js
import React from "react";
import { Container, Grid, Button } from "@mui/material";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for a talented frontend developer to join our team.",
  },
  {
    title: "Backend Developer",
    location: "New York, USA",
    type: "Full-time",
    description: "Seeking an experienced backend developer skilled in Node.js and databases.",
  },
  {
    title: "UI/UX Designer",
    location: "San Francisco, USA",
    type: "Part-time",
    description: "Creative UI/UX designer needed for designing intuitive user experiences.",
  },
  {
    title: "Project Manager",
    location: "Remote",
    type: "Contract",
    description: "Organized project manager required to oversee software development projects.",
  },
];

const Careers = () => (
  <Container maxWidth={false} className="py-20 bg-black text-white w-full">
    <h2 className="text-5xl font-extrabold text-center mb-6 text-blue-400">Join Our Team</h2>
    <p className="text-lg text-gray-300 text-center mb-10">
      Explore exciting career opportunities and be part of our innovative team.
    </p>
    <Grid container spacing={4} className="justify-center">
      {jobOpenings.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} className="flex justify-center">
          <Card className="w-full max-w-sm shadow-lg rounded-xl hover:shadow-2xl transition duration-300 p-6 bg-gray-900 text-white">
            <CardHeader floated={false} className="h-auto text-center bg-transparent p-0">
              <Typography variant="h5" className="font-bold text-blue-300">
                {job.title}
              </Typography>
            </CardHeader>
            <CardBody className="text-center">
              <Typography className="mb-2 text-gray-300">
                <strong>Location:</strong> {job.location}
              </Typography>
              <Typography className="mb-4 text-gray-300">
                <strong>Type:</strong> {job.type}
              </Typography>
              <Typography className="mb-6 text-gray-400">
                {job.description}
              </Typography>
              <Button variant="contained" color="primary" className="w-full bg-blue-500 hover:bg-blue-600">
                Apply Now
              </Button>
            </CardBody>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Careers;
