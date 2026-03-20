import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title_first: { type: String, required: true },
    title_second: { type: String, required: true },
}, { timestamps: true });

const AboutModel = mongoose.model('about', aboutSchema);

export default AboutModel;