import React, { useState, useEffect } from "react";
import style from "./Jobposting.module.css";
import { useNavigate } from "react-router-dom";
import { jobedit } from "../../apis/job";
import { jobpost } from "../../apis/job";
import JobForm from "../../components/JobForm";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Editjob() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const id = localStorage.getItem("job_id");
  const [post, setPost] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    salary: "",
    jobType: "",
    jobLocation: "",
    location: "",
    jobDesc: "",
    aboutCompany: "",
    skillsArray: "",
    information: "",
  });

  const handlesumbit = (e) => {
    e.preventDefault();
    if (id) {
      const {
        companyName,
        logoUrl,
        jobPosition,
        salary,
        jobType,
        jobLocation,
        location,
        jobDesc,
        aboutCompany,
        skillsArray,
        information,
      } = post;
      jobedit(
        id,
        companyName,
        logoUrl,
        jobPosition,
        salary,
        jobType,
        jobLocation,
        location,
        jobDesc,
        aboutCompany,
        skillsArray,
        information
      );
      navigate("/");
      localStorage.removeItem("job_id");
    } else {
      if (
        post.companyName === "" ||
        post.logoUrl === "" ||
        post.jobPosition === "" ||
        post.salary === "" ||
        post.jobType === "" ||
        post.jobLocation === "" ||
        post.location === "" ||
        post.jobDesc === "" ||
        post.aboutCompany === "" ||
        post.skillsArray === "" ||
        post.information === ""
      ) {
        setError(true);
      } else {
        const {
          companyName,
          logoUrl,
          jobPosition,
          salary,
          jobType,
          jobLocation,
          location,
          jobDesc,
          aboutCompany,
          skillsArray,
          information,
        } = post;
        jobpost(
          companyName,
          logoUrl,
          jobPosition,
          salary,
          jobType,
          jobLocation,
          location,
          jobDesc,
          aboutCompany,
          skillsArray,
          information
        );
        navigate("/");
      }
    }
  };

  const fetch = async () => {
    if (id) {
      try {
        const reqUrl = `${backendUrl}/job/detail-job/${id}`;
        const response = await axios.get(reqUrl);
        setPost(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  };

  function handlecancel() {
    localStorage.removeItem("job_id");
    navigate("/");
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token || token === undefined) {
      setIslogin(false);
    } else {
      setIslogin(true);
    }
    fetch();
  }, []);

  return (
    <>
      {islogin && (
        <JobForm
          style={style}
          post={post}
          setPost={setPost}
          error={error}
          handlecancel={handlecancel}
          handlesumbit={handlesumbit}
        />
      )}
      {!islogin && (
        <p className={style.errormsg}>
          Error authorizing request. please login first
        </p>
      )}
    </>
  );
}

export default Editjob;
