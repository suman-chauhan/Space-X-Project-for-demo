import * as api from "../../apis/index";
import moment from "moment";

export const Fetch_AllData = () => async (dispatch) => {
  try {
    const { data } = await api.Get_AllData();
    dispatch({ type: "All_DATA", payload: data });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};

export const Fetch_DataBSearch = (searchQuery) => async (dispatch) => {
  try {
    let { data } = await api.Get_AllData(searchQuery);
    data = data.filter((searchData) =>
      searchData.rocket.rocket_name.includes(searchQuery)
    );
    dispatch({ type: "SEARCH_DATA", payload: data });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};

export const filterByLaunchSuccess = () => async (dispatch) => {
  try {
    let { data } = await api.Get_AllData();
    data = data.filter((searchData) => searchData.launch_success === true);
    dispatch({ type: "SEARCH_DATA", payload: data });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};

export const filterByLaunchFailure = () => async (dispatch) => {
  try {
    let { data } = await api.Get_AllData();
    data = data.filter((searchData) => searchData.launch_success === false);
    dispatch({ type: "SEARCH_DATA", payload: data });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};

export const filterByUpcomigProject = () => async (dispatch) => {
  try {
    let { data } = await api.Get_AllData();
    data = data.filter((searchData) => searchData.upcoming === true);
    dispatch({ type: "SEARCH_DATA", payload: data });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};

export const filterByLaunchDateLastWeek = () => async (dispatch) => {
  try {
    const todayDate = new Date();
    const startDayOfPrevWeek = moment(todayDate)
      .subtract(1, "week")
      .startOf("week")
      .format("LLLL");
    const lastDayOfPrevWeek = moment(todayDate)
      .subtract(1, "week")
      .endOf("week")
      .format("LLLL");
    let { data } = await api.Get_AllData();
    data = data.filter((launch) => {
      const launchDate = launch.launch_date_utc;
      return moment(launchDate).isBetween(
        startDayOfPrevWeek,
        lastDayOfPrevWeek
      );
    });
    console.log("filterByLaunchDateLastWeek", data);
    dispatch({ type: "SEARCH_DATA", payload: data ?data : "no data found" });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};


export const filterByLaunchDateLastMonth = () => async (dispatch) => {
  try {
    const todayDate = new Date();
    const startDayOfPrevMonth = moment(todayDate)
      .subtract(1, "month")
      .startOf("month")
      .format("LLLL");
    const lastDayOfPrevMonth = moment(todayDate)
      .subtract(1, "month")
      .endOf("month")
      .format("LLLL");

    let { data } = await api.Get_AllData();
    data = data.filter((launch) => {
      const launchDate = launch.launch_date_utc;
      moment(launchDate).isBetween(startDayOfPrevMonth, lastDayOfPrevMonth);
    });
    console.log("filterByLaunchDateLastMonth", data);
    dispatch({ type: "SEARCH_DATA", payload: data ? data : "No data found" });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};

export const filterByLaunchDateLastYear = () => async (dispatch) => {
  try {
    const todayDate = new Date();
    const startDayOfPrevYear = moment(todayDate)
      .subtract(1, "month")
      .startOf("month")
      .format("LLLL");
    const lastDayOfPrevYear = moment(todayDate)
      .subtract(1, "month")
      .endOf("month")
      .format("LLLL");

    let { data } = await api.Get_AllData();
    data = data.filter((launch) => {
      const launchDate = launch.launch_date_utc;
      return moment(launchDate).isBetween(
        startDayOfPrevYear,
        lastDayOfPrevYear
      );
    });
    console.log("filterByLaunchDateLastYear", data);
    dispatch({ type: "SEARCH_DATA", payload: data || "no data found" });
  } catch (error) {
    console.log("error in fetching rockets data", error);
  }
};
