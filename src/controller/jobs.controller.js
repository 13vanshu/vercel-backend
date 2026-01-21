export const getJobs = (req, res) => {

    const jobsdetails = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechNova",
            location: "Mohali, India",
            type: "Full Time",
            experience: "0–2 Years",
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "CodeCraft",
            location: "Remote",
            type: "Full Time",
            experience: "1–3 Years",
        },
        {
            id: 3,
            title: "MERN Stack Developer",
            company: "Webify",
            location: "Chandigarh",
            type: "Internship",
            experience: "Fresher",
        },
        {
            id: 4,
            title: "UI/UX Designer",
            company: "DesignHub",
            location: "Remote",
            type: "Contract",
            experience: "0–1 Year",
        },
        {
            id: 5,
            title: "React Developer",
            company: "PixelSoft",
            location: "Bengaluru, India",
            type: "Full Time",
            experience: "1–2 Years",
        },
        {
            id: 6,
            title: "Node.js Developer",
            company: "ServerStack",
            location: "Remote",
            type: "Full Time",
            experience: "2–4 Years",
        },
        {
            id: 7,
            title: "Software Tester",
            company: "BugFree Labs",
            location: "Pune, India",
            type: "Full Time",
            experience: "0–1 Year",
        },
        {
            id: 8,
            title: "Digital Marketing Executive",
            company: "Growthify",
            location: "Delhi, India",
            type: "Full Time",
            experience: "1–3 Years",
        },
        {
            id: 9,
            title: "Graphic Designer",
            company: "CreativeX",
            location: "Remote",
            type: "Freelance",
            experience: "0–2 Years",
        },
        {
            id: 10,
            title: "Data Analyst",
            company: "InsightWorks",
            location: "Hyderabad, India",
            type: "Full Time",
            experience: "1–2 Years",
        },
    ];

    const jobspagedetails = {
        title: "Careers",
        subtitle: "Join our team and build your career with us",
        filters: {
            locations: ["All", "Remote", "India"],
            types: ["All", "Full Time", "Internship", "Contract"],
        },
        cta: {
            title: "Didn’t find a suitable role?",
            text: "Send your resume and we’ll get back to you.",
            button: "Send Resume",
        },
    };

    res.status(200).json({
        jobspagedata: jobspagedetails,
        jobsdata: jobsdetails
    });
};
