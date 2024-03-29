import React, { useState, useEffect } from "react";
import Modaal from "./Modaal";
import Header from "./home/Header";
import Sidebar from "./home/sidebar/Sidebar";
import axios from "axios";
import { getCountdown } from "../utils/countdown";
import { useNavigate } from "react-router-dom";
import CampaignPolicy from "../legal/campaignPolicy";

const baseURL = process.env.REACT_APP_URL;

const Register = () => {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const campaignId = params.get("q");

  const token = JSON.parse(window.localStorage.getItem("token"));
  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  useEffect(() => {
    async function fetchCampaignData() {
      let res;
      if (token) {
        res = await axios.get(baseURL + `/campaigns/${campaignId}`, config);
      } else {
        res = await axios.get(baseURL + `/campaigns/${campaignId}`);
      }
      setCampaign(res.data);
    }

    fetchCampaignData();
  }, [campaignId]);

  const registrationHandler = async () => {
    try {
      if (!token) {
        window.location.replace("/");
      }
      await axios.get(baseURL + `/campaigns/${campaignId}/activate/`, config);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  const deRegistrationHandler = async () => {
    try {
      await axios.get(baseURL + `/campaigns/${campaignId}/deactivate/`, config);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header menuIconClick={menuIconClick} />
      <Sidebar menuCollapse={menuCollapse} />

      <div className="main-content">
        <div className="modal-head card-banner">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "20px" }}>
              <span className="timer">
                Ends in: {getCountdown(campaign?.end_date)}
              </span>
            </div>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                paddingTop: "20px",
                paddingRight: "20px",
                color: "white",
                // textAlign: 'right'
              }}
            >
              ₹{campaign?.budget}
            </h1>
          </div>
        </div>
        <div
          className=""
          style={{
            backgroundColor: "#fff",
            borderRadius: "35px",
            marginTop: "20px",
            border: " 1px solid #9B51E0",
          }}
        >
          <div className="row " style={{ padding: "43px 10px 40px 33px" }}>
            <div className="row">
              <div className="col-lg-10">
                <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
                  {campaign?.name}
                </h1>
                <div className="campaign-info-para">
                  <p
                    className="col-lg-10 "
                    style={{
                      paddingTop: "20px",
                    }}
                  >
                    {campaign?.description}
                  </p>
                </div>
              </div>
              <div className="col-lg-2">
                {campaign?.user_status ? (
                  <button
                    className="cancel-registration"
                    onClick={deRegistrationHandler}
                  >
                    Cancel Registeration
                  </button>
                ) : (
                  <button className="start" onClick={registrationHandler}>
                    Register
                  </button>
                )}

                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    paddingTop: "20px",
                    fontWeight: "700",
                    color: "#2D9CDB",
                    textAlign: "center",
                  }}
                >
                  ₹{campaign?.budget}
                </h1>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ borderRight: "1px solid #962E40" }}
            >
              <div className="row">
                <div className="col-lg-7 campaign-info-para">
                  <p
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Streamers Participated
                  </p>
                  <div style={{ display: "flex" }}>
                    <img
                      src={require("../img/streamer1.png")}
                      alt=""
                      style={{
                        zIndex: "10",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <img
                      src={require("../img/streamer2.png")}
                      alt=""
                      style={{
                        marginLeft: "-15px",
                        zIndex: "5",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <img
                      src={require("../img/streamer3.png")}
                      alt=""
                      style={{
                        marginLeft: "-15px",
                        zIndex: "1",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <a
                      href="#"
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginLeft: "17px",
                      }}
                    >
                      {campaign?.streamers_count}+ streamers
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 campaign-info-para">
                  <p
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Total Watch Time
                  </p>
                  <div style={{ marginTop: "30px" }}>
                    <span
                      style={{
                        padding: "10px 44px",
                        border: "1px solid #9B51E0",
                        borderRadius: "29px",
                      }}
                    >
                      --------
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  paddingTop: "35px",
                }}
              >
                Media Preview
              </p>
              <div className="row gx-2">
                <div className="col-lg-4">
                  <img
                    src={campaign?.media_file}
                    alt=""
                    style={{
                      width: "100%",
                      height: "160px",
                      borderRadius: "35px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div style={{ padding: "20px 10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontWeight: "700", fontSize: "20px" }}>
                    Lorem Ipsum
                  </span>
                </div>
                <div className="scroll-area" style={{ paddingTop: "30px" }}>
                  <div style={{ padding: "10px" }}>
                    <CampaignPolicy data={campaign} />
                  </div>
                </div>
              </div>
              <Modaal
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                data={campaign}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
