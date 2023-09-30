import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const joblist = async () => {
  // get
  try {
    const reqUrl = `${backendUrl}/job/getjob`;
    const response = await axios.get(reqUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//get
export const jobdesc = async (id) => {
  try {
    const reqUrl = `${backendUrl}/job/detail-job/${id}`;
    const response = await axios.get(reqUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//post -- jobpost api

export const jobpost = async (
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
) => {
  try {
    const token = localStorage.getItem("token");
    const reqUrl = `${backendUrl}/job/job-post`;
    const reqpayLoad = {
      companyName: companyName,
      logoUrl: logoUrl,
      jobPosition: jobPosition,
      salary: salary,
      jobType: jobType,
      jobLocation: jobLocation,
      location: location,
      jobDesc: jobDesc,
      aboutCompany: aboutCompany,
      skillsArray: skillsArray,
      information: information,
    };
    const response = await axios.post(reqUrl, reqpayLoad, {
      headers: { token: token },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//patch - jobedit api

export const jobedit = async (
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
) => {
  try {
    const reqUrl = `${backendUrl}/job/edit-post/${id}`;
    const reqpayLoad = {
      companyName: companyName,
      logoUrl: logoUrl,
      jobPosition: jobPosition,
      salary: salary,
      jobType: jobType,
      jobLocation: jobLocation,
      location: location,
      jobDesc: jobDesc,
      aboutCompany: aboutCompany,
      skillsArray: skillsArray,
      information: information,
    };
    const response = await axios.patch(reqUrl, reqpayLoad);
    return response;
  } catch (error) {
    console.log(error);
  }
};
