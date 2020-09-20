import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Search, Grid, List } from "react-feather";
import { Table } from "react-bootstrap";
import { fetchActivists } from "../../store/actions/activistsActions";
import Header from "../../components/Layout/Header";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import ActivistCard from "../../components/ActivistCard";

const Activists = ({ activists, fetchActivists }) => {
  const [activistsList, setActivistsList] = useState([]);
  const [listView, setListView] = useState(false);

  useEffect(() => {
    async function loadData() {
      await fetchActivists();
      if (activists) setActivistsList(activists);
    }
    loadData();
  }, [activists]);

  const handleClick = () => {
    console.log("clicked");
  };

  const handleView = () => {
    setListView(!listView);
  };

  return (
    <div className="activists-div">
      <Header headerBgColor="#fff" textColor="#6A0000" />
      <div className="section-one-div">
        <div className="sec-one-left">
          <Search size={15} className="search-icon" />
          <Input
            className="search-input"
            label=""
            placeholder="Search for activists, movements, etc"
            style={{
              className: "search-input act",
              width: "404px",
              height: "64px",
              borderRadius: "2px",
              border: "1px solid #ddd",
              color: "#b4b4b4",
              margin: "10px",
              padding: "0 40px",
            }}
          />
          <Button
            label="Search"
            className="add-activist-btn act"
            handleClick={handleClick}
            style={{
              backgroundColor: "#6A0000",
              color: "#fff",
              border: "3px solid #6A0000",
              outline: "none",
              height: "64px",
              width: "151px",
              borderRadius: "2px",
              fontSize: "20px",
              margin: "10px",
            }}
          />
        </div>
        <div className="sec-one-right">
          <Button
            label="Add New Activist"
            className="add-activist-btn"
            handleClick={handleClick}
            style={{
              backgroundColor: "#fff",
              color: "#6A0000",
              border: "3px solid #6A0000",
              outline: "none",
              height: "64px",
              width: "243px",
              borderRadius: "2px",
              fontSize: "20px",
            }}
          />
        </div>
      </div>
      <div className="toggle-view-div">
        <div className="toggle-icons-div">
          {listView ? (
            <Grid
              onClick={handleView}
              size={30}
              // style={{ margin: '10px' }}
              className="grid-icon v-icon"
            />
          ) : (
            <List onClick={handleView} size={30} className="list-icon v-icon" />
          )}
        </div>
      </div>
      <div className="activists-section">
        <div className="">
          {listView ? (
            <div className="inner-div fixed-header">
              {activistsList &&
                activistsList.map((activist, index) => {
                  return (
                    <ActivistCard
                      className="flex-item"
                      key={index}
                      avatarUrl={activist.imgUrl}
                      name={activist.person}
                      desc={activist.description}
                      dob={activist.dateOfBirth}
                      location={activist.placeOfBirth}
                    />
                  );
                })}
            </div>
          ) : (
            <div className="list-view-div">
              <Table className="list-table">
                <thead className="fixed-th">
                  <tr
                    className="fiex-table"
                    style={{  display: "flex",
                    alignItems: "center", width: '100%' }}
                  >
                    <th style={{ marginRight: "520px", float: "left", width: '50%' }}>Name</th>
                    <th  style={{ width: "50%", float: "right" }}>
                      Description
                    </th>
                  </tr>
                </thead>
                {activistsList &&
                  activistsList.map((activist, index) => {
                    return (
                      <tbody key={index}>
                        <tr className="tr">
                          <td className="td">
                            <div
                              style={{
                                width: "auto",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div className='img-d'>
                              <img
                                className="img"
                                width="64px"
                                height="64px"
                                alt="avtr"
                                src={activist.imgUrl}
                                />

                              </div>
                              {activist.person}
                            </div>
                          </td>
                          <td className='right' >{activist.description}</td>
                        </tr>
                      </tbody>
                    );
                  })}
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activists: state.activist.activists,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivists: () => dispatch(fetchActivists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activists);
