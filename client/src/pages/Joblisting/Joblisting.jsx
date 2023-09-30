import React, { useEffect, useState } from "react";
import style from "./Joblisting.module.css";
import searchicon from "../../assets/Vector.png";
import indiaicon from "../../assets/emojione-v1_flag-for-india.png";
import peopleicon from "../../assets/Group 3.png";
import ruppesicon from "../../assets/Vector (1).png";
import profile from "../../assets/image 2.png";
import logo from "../../assets/image 464.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
function Mainpage() {
  const [jobs, setJobs] = useState([]);
  const [islogin, setIslogin] = useState(false);
  const navigate = useNavigate();
  const [skill, setSkill] = useState([]);
  const [recruiter, setRecruiter] = useState("");
  const [search, setSearch] = useState("");

  const checktoken = () => {
    let token = localStorage.getItem("token");
    if (token) {
      setIslogin(true);
      setRecruiter(localStorage.getItem("recruiter"));
    } else {
      setIslogin(false);
    }
  };
  const fetchjobs = async () => {
    try {
      const reqUrl = `${backendUrl}/job/getjob`;
      const response = await axios.get(reqUrl, {
        params: {
          search: search,
          skills: skill,
        },
      });
      setJobs(response.data.jobs);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  function selectskill(e) {
    let temp = e.target.value;
    if (!skill.includes(temp)) {
      setSkill((skill) => [...skill, temp]);
    }
  }
  function close(selectskill) {
    setSkill(skill.filter((item) => item !== selectskill));
  }
  function clear() {
    setSkill([]);
  }

  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
    setIslogin(false);
  };

  const handleview = (id) => {
    localStorage.setItem("job_id", id);
    navigate("/jobdetails");
  };
  const handleedit = (id) => {
    localStorage.setItem("job_id", id);
    navigate("/add-job");
  };

  useEffect(() => {
    checktoken();
    fetchjobs();
  }, [search, skill]);

  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <p className={style.title}>Jobfinder</p>
          <div className={style.button_main}>
            {!islogin && (
              <>
                <button
                  className={style.loginbtn}
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className={style.registerbtn}
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}

            {islogin && (
              <>
                <button
                  className={style.loginbtn}
                  onClick={handlelogout}
                  style={{ border: "none" }}
                >
                  Logout
                </button>
                <button
                  className={style.registerbtn}
                  style={{ color: "white", backgroundColor: "#ed5353" }}
                >{`Hello! ${recruiter}`}</button>
                <img src={profile} alt="" />
              </>
            )}
          </div>
        </div>

        <div className={style.maincontainer}>
          <div className={style.meassagebox}>
            <div className={style.search}>
              <img src={searchicon} alt="" />
              <input
                type="text"
                placeholder="Type any job title"
                className={style.serachinput}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={style.skills}>
              <select name="skills" onChange={(e) => selectskill(e)}>
                <option disabled selected hidden>
                  skills
                </option>
                <option value="FRONTEND">FRONTEND</option>
                <option value="BACKEND">BACKEND</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JAVASCRIPT">JAVASCRIPT</option>
                <option value="TYPESCRIPT">TYPESCRIPT</option>
                <option value="REACTJS">REACTJS</option>
                <option value="REACTNATIVE">REACTNATIVE</option>
                <option value="NODEJS">NODEJS</option>
                <option value="EXPRESSJS">EXPRESSJS</option>
                <option value="MONGODB">MONGODB</option>
                <option value="PYTHON">PYTHON</option>
                <option value="JAVA">JAVA</option>
                <option value="SQL">SQL</option>
              </select>
              <div className={style.skillselect}>
                {skill.map((selectskill, i) => {
                  return (
                    <div key={i} className={style.skillmain}>
                      <p>{selectskill}</p>
                      <button onClick={() => close(selectskill)}>X</button>
                    </div>
                  );
                })}
              </div>
              <p className={style.clear} onClick={clear}>
                clear
              </p>
              {/* {!islogin && <></>}{" "} */}
              {islogin && (
                <button
                  className={style.addjobbtn}
                  onClick={() => navigate("/add-job")}
                >
                  + Add Job
                </button>
              )}
            </div>
          </div>
          {jobs.map((jobs, i) => {
            return (
              <div key={jobs._id} className={style.viewjobs}>
                <div className={style.jobinfo}>
                  <img
                    src={jobs.logoUrl || logo}
                    alt=""
                    className={style.clogo}
                  />
                  <div className={style.basicinfo}>
                    <h3 className={style.jobposition}>{jobs.jobPosition}</h3>
                    <div className={style.jobdetails}>
                      <div className={style.jobpeople}>
                        <img src={peopleicon} alt="" />
                        <p>11-50</p>
                      </div>
                      <div className={style.jobsalary}>
                        <img src={ruppesicon} alt="" />
                        <p>{jobs.salary}</p>
                      </div>
                      <div className={style.jobarea}>
                        <img src={indiaicon} alt="" />
                        <p>{jobs.location}</p>
                      </div>
                    </div>
                    <div className={style.jobtype}>
                      <p>{jobs.jobLocation}</p>
                      <p>{jobs.jobType}</p>
                    </div>
                  </div>
                </div>
                <div className={style.jobskillsets}>
                  <div className={style.jobskill}>
                    {jobs.skillsArray.map((skill, index) => {
                      return (
                        <div key={index}>
                          <button>{skill}</button>
                        </div>
                      );
                    })}
                  </div>

                  <div className={style.viewdetail}>
                    {islogin && (
                      <button
                        onClick={() => handleedit(jobs._id)}
                        style={{
                          color: "#ed5353",
                          backgroundColor: "white",
                          border: " 2px solid #ed5353",
                        }}
                      >
                        Edit job
                      </button>
                    )}
                    <button onClick={() => handleview(jobs._id)}>
                      View details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mainpage;
