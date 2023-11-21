// Importing mongoose for creating schemas and models
import mongoose from "mongoose";

// Creating a schema using mongoose.Schema
const schema = mongoose.Schema;

// Defining the instructor schema with specified fields and their types
const instructorSchema = new schema({
  instructor_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  contactnum: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
  }
},
{
  // Excluding the version key from the schema
  versionKey: false
});

// Creating a mongoose model named 'Instructor' based on the defined schema
const Instructor = mongoose.model('instructor', instructorSchema);

// Exporting the Instructor model for use in other files
export default Instructor;