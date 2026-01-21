export const getTeam = (req, res) => {

  const teamMembers = [
    {
      id: 1,
      avatar: "A",
      name: "Alex Kumar",
      role: "Project Manager",
      description:
        "Responsible for planning, coordination, and timely delivery of projects while ensuring quality standards.",
    },
    {
      id: 2,
      avatar: "B",
      name: "Bhavna Sharma",
      role: "Frontend Developer",
      description:
        "Focuses on building responsive user interfaces and maintaining consistency across web applications.",
    },
    {
      id: 3,
      avatar: "C",
      name: "Chirag Verma",
      role: "Backend Developer",
      description:
        "Handles server-side logic, APIs, and system performance to ensure stability and scalability.",
    },
  ];

  res.status(200).json({
    title: "Our Team",
    intro: "Our team consists of skilled professionals with experience across technology, design, and business operations. We work collaboratively to deliver reliable and high-quality solutions.",
    teamdata: teamMembers
  })
}