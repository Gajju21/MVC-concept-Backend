import fs from "fs";
const value = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const data = value.data;

export const createdata = (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.sendStatus(201).json();
};

export const replacedata = (req, res) => {
  const id = +req.params.id;
  const dataindex = data.findIndex((p) => p.id === id);
  data.splice(dataindex, 1, { ...req.body, id: id });
  res.sendStatus(201).json();
};

export const updatedata = (req, res) => {
  const id = +req.params.id;
  const dataindex = data.findIndex((p) => p.id === id);
  let singledata = data[dataindex];
  data.splice(dataindex, 1, { ...singledata, ...req.body });
  res.sendStatus(201).json();
};

export const deletedata = (req, res) => {
  const id = +req.params.id;
  const dataindex = data.findIndex((p) => p.id === id);
  let singledata = data[dataindex];
  data.splice(dataindex, 1);
  res.status(201).json(singledata);
};

export const getalldata = (req, res) => {
  res.json(data);
};

export const getdatabyid = (req, res) => {
  const id = +req.params.id;
  // console.log(id);
  let singledata = data.find((p) => p.id === id);
  res.json(singledata);
};
