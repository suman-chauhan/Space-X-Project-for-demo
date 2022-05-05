import axios from "axios";

export const Get_AllData = async () => {
  const data = await axios.get("https://api.spacexdata.com/v3/launches");
  return data;
};
