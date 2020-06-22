import React, { Fragment, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { fetchJournal } from "../store/actions/journalsActions";
import Page from "./Page";

function Journals(props) {
  //const [page] = useState("");
  // const [date, setDate] = useState(true);

  // const getDate=(str) =>{
  //   var ops = {year: 'numeric'};
  //   ops.month = ops.day = '2-digit';
  //   return new Date(str).toLocaleDateString(0, ops);}

  useEffect(() => {
    props.fetchJournal();
  }, []);
  const year = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //let tog= props.journals[0]?props.journals[0]["date"]:false
  //console.log(props.journals[0]?props.journals[0]["date"]:null)
  return (
    <Fragment>
      <Navigation />
      <Container fluid>
        {year.map((el, index) => {
          return (
            <Fragment key={index}>
              <Row key={index}>
                <Col md="auto">
                  <h3 key={index}> Pages from {el}</h3>
                </Col>
              </Row>
              <Row>
                {props.journals.map((day, i) => {
                  let dt = new Date(day.date);
                  let month = dt.getMonth();
                  if (year[month] === el) {
                    return (
                      <Col md="3">
                        {" "}
                        <Page props={day} month={el} key={i} />{" "}
                      </Col>
                    );
                  }
                })}
              </Row>

              {/* {
                          props.journals.map((day, i)=>{
                            let dt= new Date(day.date)
                            let month= dt.getMonth()
                            if (year[month]== el){
                            //  setDate(false)
                              return <Page props={day} key={i}/>
                            }
                          })
                        } */}
              {/* {date&& <div> No entries yet</div>} */}
            </Fragment>
          );
        })}
      </Container>
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    journals: state.journals.journals,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchJournal: () => dispatch(fetchJournal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Journals);
