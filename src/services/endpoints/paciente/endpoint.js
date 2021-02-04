import { api } from "../../api";

export const createPatient = (params) => {
  return api.post("/patient/create", params);
};

export const listPatients = () => {
  return api.get("/patient/list");
};
