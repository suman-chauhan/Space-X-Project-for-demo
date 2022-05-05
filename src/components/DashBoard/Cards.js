import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_AllData } from "../../redux/actions/rocket";
import ReactPaginate from "react-paginate";
import Error from "./Error/Error";

const Cards = () => {
  const [perPage, setperPage] = useState(3);
  const [currentPage, setcurrentPage] = useState(0);

  const projectData = useSelector((state) => state.rocket);
  console.log(projectData);
  const dispatch = useDispatch();

  const handleClick = ({ selected: selectedPage }) => {
    setcurrentPage(selectedPage);
  };

  const offset = currentPage * perPage;
  const currentPageData = projectData.slice(offset, offset + perPage);
  const pageCount = Math.ceil(projectData.length / perPage);

  useEffect(() => {
    dispatch(Fetch_AllData());
  }, []);

  return !currentPageData.length && currentPageData.length === 0 ? (
    <Error />
  ) : (
    <div className="mt-5">
      <div className="container-fluid mt-2 d-flex  p-1">
        <div className="row text-center">
          {currentPageData &&
            currentPageData.map((rocketData) => {
              let launchDay = new Date(rocketData.launch_date_local);
              launchDay = launchDay.toDateString();
              return (
                <div
                  className="card  mx-3 col-10 col-md-4 mt-2 "
                  key={rocketData.flight_number}
                  style={{ width: "28rem" }}
                >
                  <img
                    className="card-img-top p-1"
                    width={150}
                    height={200}
                    src={rocketData.links.mission_patch}
                    alt="image"
                  />
                  <div className="card-body">
                    <h5 className="card-subtitle mb-3 text-muted">
                      {rocketData.mission_name}
                    </h5>
                    <h6 className=" mb-2 text-muted">{launchDay}</h6>

                    <hr />
                    <p className="card-text">
                      Rocket : {rocketData.rocket.rocket_name}
                    </p>
                    <a
                      className="card-link  card-subtitle  text-sm-left"
                      target="_blank"
                      href={rocketData.links.video_link}
                    >
                      Watch Video
                    </a>
                    <a
                      className="card-link  card-subtitle  text-sm-left"
                      target="_blank"
                      href={rocketData.links.article_link}
                    >
                      More details
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ReactPaginate
          className=" d-inline-flex  px-md-5"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handleClick}
          pageRangeDisplayed={perPage}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Cards;
