import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const Login = async (email, password) => {
  try {
    const reqUrl = `${backendUrl}/auth/login`;
    const reqpayLoad = {
      email: email,
      password: password,
    };
    const response = await axios.post(reqUrl, reqpayLoad);
    localStorage.clear();
    localStorage.setItem("token", response.data.jwToken);
    localStorage.setItem("recruiter", response.data.recruiterName);
    localStorage.setItem("email", response.data.user);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (name, email, password, mobile, checkbox) => {
  try {
    const reqUrl = `${backendUrl}/auth/register`;
    const reqpayLoad = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      checkbox: checkbox,
    };
    const response = await axios.post(reqUrl, reqpayLoad);
    localStorage.clear();
    localStorage.setItem("token", response.data.jwToken);
    localStorage.setItem("recruiter", response.data.recruiterName);
    localStorage.setItem("email", response.data.user);
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.res.data);
  }
};
