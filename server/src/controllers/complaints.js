import Complain from "../models/complaints.js";

export const createComplaint = async (req, res, next) => {
  const newComplain = new Complain(req.body);
  try {
    const saveComplain = await newComplain.save();
    res.status(200).json(saveComplain);
  } catch (err) {
    next(err);
  }
};

export const getAllComplaints = async (req, res, next) => {
  try {
    const complaints = await Complain.find({});

    res.status(200).json(complaints);
  } catch (err) {
    next(err);
  }
};
