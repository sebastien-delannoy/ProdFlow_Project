import Incident from "../models/IncidentModel.js";

export const getTickets = async (req, res) => {
  try {
    const response = await Incident.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTicketById = async (req, res) => {
  try {
    const response = await Incident.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTicketByLine = async (req, res) => {
  try {
    const response = await Incident.find({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTicket = async (req, res) => {
  try {
    await Incident.create(req.body);
    res.status(201).json({ msg: "Incident Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTicket= async (req, res) => {
  try {
    await Incident.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Incident Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    await Incident.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Incident Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
