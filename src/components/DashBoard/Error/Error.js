import React from "react";

const Error = ({}) => {
  return (
    <div className="card mt-5 mx-5 my5 mb-5" style={{ width: "30rem" }}>
      <img
        className="card-img-top"
        src="https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
        alt="Card image cap"
      />
      <div className="card-body">
        <b>
          {" "}
          <h5 className="card-subtitle font-weight-bold">No SpaceX Project</h5>
        </b>
        <br />
        <p className="card-text text-danger">
          There are no projects for current Match !
        </p>
      </div>
      <div className="card-body">
        <h6 className="text-warning">Please make a valid match!</h6>
      </div>
    </div>
  );
};

export default Error;
