import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const btnstyle = {
    margin: "5px 5px",
    padding: "10px",
    backgroundColor : '#001c6a',
    color : 'white',
    textAlign : 'center',
    borderRadius : '22px',
    minWidth : '100px',
    fontFamily : 'DM Serif Display',
    fontSize : 'larger'
  };
  const bgBodyStyle = {
    background:
      'url("https://4kwallpapers.com/images/wallpapers/huawei-nova-8-pro-stock-bubble-circle-white-background-teal-3840x2160-3957.png") center center no-repeat',
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100vh",
  };
  const reptbtn = {
    width: "70px"
  };

  const combinedStyle1 = { ...btnstyle, ...reptbtn };

  const handleChange = (event) => {
    // console.log("Handling Change");
    setText(event.target.value);
  };
  const copyText = () => {
    // console.log("Copied Text");
    let txti = document.getElementById("textare");
    txti.select();
    document.execCommand("copy");
  };
  const upperCase = () => {
    // console.log("Clicked On Upper");
    setText(text.toUpperCase());
  };
  const lowerCase = () => {
    // console.log("Clicked On Lower");
    setText(text.toLowerCase());
  };
  const toggleNavColor = () => {
    // console.log("Clicked On Nav Dark");
    if (navsty.color == "black")
      setnavsty({ backgroundColor: "black", color: "white" });
    else setnavsty({ backgroundColor: "white", color: "black" });
  };
  const textTrim = () => {
    // console.log("Clicked On Trim");
    setText(text.trim());
  };
  const whiteSpaces = () => {
    // console.log("Clicked On Remove Extra Spaces");
    var inputString = text;
    var resultString = inputString.replace(/\s+/g, " ").trim();
    setText(resultString);
  };
  const clearText = () => {
    // console.log("Clicked On Clear");
    setText("");
  };
  const textRepeat = () => {
    // console.log("Clicked On Clear");
    let repeatcounter = document.getElementById("repeatcounter").value;
    if (repeatcounter < 0) {
      setText(text);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setText(text.repeat(repeatcounter));
    }
  };

  const [text, setText] = useState("Sizzle your sentences here...");
  const [showAlert, setShowAlert] = useState(false);

  const [navsty, setnavsty] = useState({
    backgroundColor: "white",
    color: "black",
  });
  return (
    <>
      <div style={navsty} className="box">
        <nav
          className="navbar navbar-expand-lg bg-primary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{fontFamily : 'Climate Crisis'}}>
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/" style={{fontFamily : 'DM Serif Display',
    fontSize : 'larger'}}>
                  Home
                </Link>
                <Link className="nav-link" to="/About" style={{fontFamily : 'DM Serif Display',
    fontSize : 'larger'}}>
                  About-us
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div style={bgBodyStyle}>
          <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "96vh", margin: "-120px 85px -170px 85px " }}
          >
            <div className="mb-3">
              <label htmlFor="textare" className="form-label" style={{fontFamily : "lobster",fontSize : "xx-large"}}>
                Power up your text - simple operations at your fingertips.
              </label>
              <textarea
                style={{ width: "700px" }}
                className="form-control mx-auto"
                value={text}
                onChange={handleChange}
                id="textare"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div
            className="buttonsbox  d-flexbox align-items-center justify-content-center"
            style={{
              height: "7vh",
              margin: "-7px 190px 0px 80px",
              width: "190vh",
              display: "inline flex"
            }}
          >
            <button style={btnstyle} onClick={upperCase}>
              UpperCase
            </button>
            <button style={btnstyle} onClick={lowerCase}>
              LowerCase
            </button>
            <button style={btnstyle} onClick={textTrim}>
              Trim
            </button>
            <button style={btnstyle} onClick={clearText}>
              Clear
            </button>

            <button style={btnstyle} onClick={whiteSpaces}>
              Remove Extra Spaces
            </button>
            <button style={btnstyle} onClick={copyText}>
              Copy Text
            </button>
            <br />
            <input style={combinedStyle1} id="repeatcounter" type="number" defaultValue="1" />
            <button style={btnstyle} onClick={textRepeat}>
              Repeat{" "}
            </button>
            <br />
          </div>
          <div
            className="dataInfo d-flex flex-column align-items-center justify-content-center "
            style={{ margin: "50px 0px 0px 0px" }}
          >
            <h3 style={{fontFamily : 'DM Serif Display',
    fontSize : 'xx-large'}}>
              Words :{" "}
              {
                text.split(/\s+/).filter((word) => {
                  return word.length != 0;
                }).length
              }{" "}
              , Characters : {text.length}
            </h3>
            <br />
            <div className="alertmsg">
              {showAlert && (
                <div className="alert alert-warning" role="alert" style={{fontFamily : 'DM Serif Display',
                fontSize : 'larger'}}>
                  Cannot Repeat In Negative!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "SBV",
};
