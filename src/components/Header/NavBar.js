import React, { useEffect, useState } from "react";
import { Fetch_DataBSearch ,
  filterByLaunchSuccess,
  Fetch_AllData,
  filterByLaunchFailure,
  filterByUpcomigProject,
  filterByLaunchDateLastWeek,
  filterByLaunchDateLastMonth,
  filterByLaunchDateLastYear,} from "../../redux/actions/rocket";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
const NavBarComponent = () => {
  const [inputValue, setinputValue] = useState("");
  const [sortValues, setsortValues] = useState("");
  const dispatch = useDispatch();

  const getInputData = () => {
    dispatch(Fetch_DataBSearch(inputValue));
    setinputValue("");
  };
 

  const onHandleChange = (e) => {
    setsortValues(e.target.value);
    
    switch (e.target.value) {
      case "Launch Success":
        dispatch(filterByLaunchSuccess());
        break;
      case "Launch Faliure":
        dispatch(filterByLaunchFailure());
        break;
      case "upcoming":
        dispatch(filterByUpcomigProject());
        break;

      case "Last Week":
        dispatch(filterByLaunchDateLastWeek());
        break;
      case "Last Month":
        dispatch(filterByLaunchDateLastMonth());
        break;
      case "Last Year":
        dispatch(filterByLaunchDateLastYear());
        break;
      default:
      //  block
    }
  };

   useEffect(()=>
   {
    dispatch(Fetch_AllData());
   },onHandleChange,getInputData)

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="logo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-3 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav>
              {" "}
              <div
                className="bg-body  align-items-center"
                style={{ width: "30rem", margin: "auto" }}
              >
                <select
                  className="form-control bg-light border-0  dropdown-toggle align-items-center"
                  aria-label=" select example"
                  value={sortValues}
                  onChange={onHandleChange}
                  
                >
                  <option value="Sort Projects">Sort Projects</option>
                  <option value="Launch Success">Success launch</option>
                  <option value="Launch Faliure">Launch Faliure</option>
                  <option value="upcoming"> Upcoming Projects</option>
                  <option value="Last Week">By Last Week</option>
                  <option value="Last Month">By Last Month</option>
                  <option value="Last Year"> By Last Year</option>
                </select>
              </div>
            </Nav>
            <NavDropdown.Divider />
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search By Rocket Name"
              className="me-2"
              aria-label="Search"
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
            />
            <Button onClick={getInputData} variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
