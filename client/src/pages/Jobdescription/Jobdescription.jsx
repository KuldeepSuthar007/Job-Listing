import React, { useEffect, useState } from "react";
import style from "./Jobdescription.module.css";
import stipend from "../../assets/ph_money-fill.png";
import calendar from "../../assets/uis_calender.png";
import profile from "../../assets/image 2.png";
import { useNavigate } from "react-router-dom";
// import { jobdesc } from "../../apis/job";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Viewdetails() {
  const [jobdetail, setJobdetail] = useState({});
  const [islogin, setIslogin] = useState(false);
  const [recruiter, setRecruiter] = useState("");
  const navigate = useNavigate();

  const fetchdetails = async () => {
    setRecruiter(localStorage.getItem("recruiter"));

    const jobid = localStorage.getItem("job_id");
    try {
      const reqUrl = `${backendUrl}/job/detail-job/${jobid}`;
      const response = await axios.get(reqUrl);
      setJobdetail(response.data);
      let token = localStorage.getItem("token");
      if (!token) {
        setIslogin(false);
      } else {
        setIslogin(true);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
    // jobdesc(jobid)
  };
  const handleedit = (id) => {
    localStorage.setItem("job_id", id);
    navigate("/add-job");
  };
  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
    setIslogin(false);
  };
  useEffect(() => {
    fetchdetails();
  }, [setJobdetail]);

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <p className={style.title}>Jobfinder</p>
        <div className={style.button_main}>
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
        </div>
      </div>
      <div className={style.maincontainer}>
        <div className={style.meassagebox}>
          <p
            className={style.message}
          >{`${jobdetail.jobPosition} work from home job/internship at ${jobdetail.companyName}`}</p>
        </div>
        <div className={style.fulljob}>
          <div>
            <p className={style.timeAndType}>
              {`1w ago . ${jobdetail.jobType} `}{" "}
              <img
                src={jobdetail.logoUrl}
                style={{
                  width: "45px",
                  height: "45px",
                  margin: "0px 12px 0px 12px",
                }}
                alt=""
              />{" "}
              {` ${jobdetail.companyName}`}
            </p>
          </div>
          <div className={style.title_location_editJob}>
            <div className={style.title_location}>
              <h1 className={style.job_title}>{jobdetail.jobPosition}</h1>
              <p
                className={style.job_location}
              >{`${jobdetail.location} | India`}</p>
            </div>
            {islogin && (
              <button
                className={style.editjobbtn}
                onClick={() => handleedit(jobdetail._id)}
              >
                Edit Job
              </button>
            )}
          </div>

          <div className={style.stipend_duration}>
            <div className={style.stipend}>
              <div className={style.wrapperstipend}>
                <img src={stipend} alt="logo" className={style.stipend} />
                <p className={style.stipend_caption}>Stipend</p>
              </div>
              <div
                className={style.stipendAmount}
              >{`Rs ${jobdetail.salary}/month`}</div>
            </div>
            <div className={style.duration}>
              <div className={style.wrapperduration}>
                <img src={calendar} alt="logo" className={style.calendar} />
                <p className={style.duration_caption}>Duration</p>
              </div>
              <div className={style.timeduration}>6 Months</div>
            </div>
          </div>

          <h5 className={style.subheading}>About company</h5>
          <p className={style.plaintext}>{jobdetail.aboutCompany}</p>
          <h5 className={style.subheading}>About the job/internship</h5>
          <p className={style.plaintext}>{jobdetail.jobDesc}</p>

          <h5 className={style.subheading}>Skill(s) required</h5>

          <div className={style.skills}>
            {jobdetail.skillsArray?.map((skill, i) => (
              <button key={i}>{skill}</button>
            ))}
          </div>
          <h5 className={style.subheading}>Additional Information</h5>
          <p className={style.plaintext}>{jobdetail.information}</p>
        </div>
      </div>
    </div>
  );
}

export default Viewdetails;
