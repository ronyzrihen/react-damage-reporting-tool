import Button from "./Button.jsx";
import axios from "axios";
const api = axios.create({
  baseURL: "https://express-damage-reporting-tool.onrender.com",
});
const create = async (e) => {
  e.preventDefault();
  const report = {
    id: document.getElementsByName("id")[0].value,
    type: document.getElementsByName("type")[0].value,
    desc: document.getElementsByName("desc")[0].value,
  };
  try {
    await api.post("/damage-reports/", report);
  } catch (e) {
    console.log(e.message);
  }
};
const CreationForm = () => {
  return (
    <div>
      <form>
        <label>
          Report ID:
          <input type="text" name="id" />
        </label>
        <label>
          Type:
          <select name="severity" id="severity">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Description:
          <input type="text" name="desc" />
        </label>
        <Button onClick={create} btnVal={"Create"} />
      </form>
    </div>
  );
};
export default CreationForm;
