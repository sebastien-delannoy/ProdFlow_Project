import Line from "../models/LineModel.js";

export const getLines = async (req, res) => {
  try {
    const response = await Line.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getLineById = async (req, res) => {
  try {
    const response = await Line.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getLineBySite = async (req, res) => {
  try {
    const response = await Line.find({
      where: {
        site_id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createLine = async (req, res) => {
  try {
    await Line.create(req.body);
    res.status(201).json({ msg: "Line Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLine = async (req, res) => {
  try {
    await Line.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Line Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLine = async (req, res) => {
  try {
    await Line.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Line Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
