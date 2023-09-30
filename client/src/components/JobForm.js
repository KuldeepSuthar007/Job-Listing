import React from 'react'

function JobForm({ style, post, setPost, error, handlecancel, handlesumbit }) {
    return (
        <div className={style.container}>
            <div className={style.leftsection}>
                <p className={style.heading}> Add job description</p>
                <form>
                    <div className={style.formdiv}>
                        <label htmlFor="">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Enter your company name here"
                            value={post.companyName}
                            onChange={(e) =>
                                setPost({ ...post, companyName: e.target.value })
                            }
                        />
                    </div>
                    {error && post.companyName === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p} ></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Add logo URL </label>
                        <input
                            type="text"
                            name="logoUrl"
                            placeholder="Enter the link"
                            value={post.logoUrl}
                            onChange={(e) =>
                                setPost({ ...post, logoUrl: e.target.value })
                            }
                        />
                    </div>
                    {error && post.logoUrl === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Job position </label>
                        <input
                            type="text"
                            name="jobPosition"
                            placeholder="Enter job position"
                            value={post.jobPosition}
                            onChange={(e) =>
                                setPost({ ...post, jobPosition: e.target.value })
                            }
                        />
                    </div>
                    {error && post.jobPosition === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Monthly salary</label>
                        <input
                            type="text"
                            name="salary"
                            placeholder="Enter Amount in rupees"
                            value={post.salary}
                            onChange={(e) => setPost({ ...post, salary: e.target.value })}
                        />
                    </div>
                    {error && post.salary === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>
                        <label htmlFor="">Job Type</label>
                        <div className={style.selectdiv}>
                            <select
                                name="jobType"
                                value={post.jobType}
                                onChange={(e) => {
                                    setPost({ ...post, jobType: e.target.value });
                                }}
                            >
                                <option value="" disabled selected hidden>
                                    Select
                                </option>
                                <option value="Full Time">Full Time</option>
                            </select>
                        </div>
                    </div>
                    {error && post.jobType === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div
                        className={style.formdiv}
                        value={post.jobLocation}
                        onChange={(e) => {
                            setPost({ ...post, jobLocation: e.target.value });
                        }}
                    >
                        <label htmlFor="">Remote/office</label>
                        <div className={style.selectdiv}>

                            <select name="jobLocation" id="jobtype">
                                <option value="" disabled selected hidden>
                                    Select
                                </option>
                                <option value="Remote">Remote</option>
                                <option value="office">office</option>
                            </select>
                        </div>
                    </div>
                    {error && post.jobLocation === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter Location"
                            value={post.location}
                            onChange={(e) =>
                                setPost({ ...post, location: e.target.value })
                            }
                        />
                    </div>
                    {error && post.location === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Job Description </label>
                        <textarea
                            type="text"
                            name="jobDesc"
                            placeholder="Type the job description"
                            value={post.jobDesc}
                            onChange={(e) =>
                                setPost({ ...post, jobDesc: e.target.value })
                            }
                        />
                    </div>
                    {error && post.jobDesc === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">About Company</label>
                        <textarea
                            type="text"
                            name="aboutCompany"
                            placeholder="Type about your company"
                            value={post.aboutCompany}
                            onChange={(e) =>
                                setPost({ ...post, aboutCompany: e.target.value })
                            }
                        />
                    </div>
                    {error && post.aboutCompany === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Skills Required</label>
                        <input
                            type="text"
                            name="skillsArray"
                            placeholder="Enter the must have skills"
                            value={post.skillsArray}
                            onChange={(e) =>
                                setPost({ ...post, skillsArray: e.target.value.toUpperCase() })
                            }
                        />
                    </div>
                    {error && post.skillsArray === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div className={style.formdiv}>

                        <label htmlFor="">Information</label>
                        <input
                            type="text"
                            name="information"
                            placeholder="Enter the additional information"
                            value={post.information}
                            onChange={(e) =>
                                setPost({ ...post, information: e.target.value })
                            }
                        />
                    </div>
                    {error && post.information === "" ? (
                        <p className={style.errortext}>Field is required</p>
                    ) : (
                        <p className={style.p}></p>
                    )}
                    <div style={{ justifyContent: "flex-end" }}>
                        <button className={style.cancel} onClick={handlecancel}>
                            Cancel
                        </button>
                        <button
                            className={style.submit}
                            type="submit"
                            onClick={handlesumbit}
                        >
                            + Add Job
                        </button>
                    </div>
                </form>
            </div>
            <div className={style.rightsection}>
                {/* <img alt="" /> */}
                <p className={style.title}>Recruiter add job details here</p>
            </div>
        </div>
    )
}

export default JobForm