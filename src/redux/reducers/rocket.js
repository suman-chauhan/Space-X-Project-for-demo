const rocket = (rocket = [], actions) => {
  if (actions.type === "All_DATA") {
    return actions.payload;
  }
  if(actions.type === "SEARCH_DATA")
  {
    return actions.payload;
  }
  if(actions.type === "SORTED_DATA")
  {
    return actions.payload;
  }

  return rocket;
};

export default rocket;
