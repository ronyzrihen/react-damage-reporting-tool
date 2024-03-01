import axios from "axios";
const api = axios.create({
  baseURL: "https://express-damage-reporting-tool.onrender.com",
});
const createReport = async (report) => {
  await api.post("/damage-reports/", report);
};

const deleteReport = async (id) => {
  console.log("Deleting report with id", id);
  await api.delete(`/damage-reports/${id}`);
};

const fetchReports = async (searchTerm) => {
  const search = searchTerm ? `title/${searchTerm}` : "";
  const response = await api.get(`/damage-reports/${search}`);
  return response.data;
};

const updateReport = async (id, report) => {
  await api.put(`/damage-reports/${id}`, report);
};
export { createReport, deleteReport, fetchReports, updateReport };
