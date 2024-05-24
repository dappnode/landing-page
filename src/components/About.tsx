import { motion } from "framer-motion";

const team: {
  name: string;
  role: string;
  img: string;
}[] = [
  {
    name: "Jordi Baylina",
    role: "Founder",
    img: "./team/Jordi_Baylina.webp",
  },
  {
    name: "Griff Green",
    role: "Founder",
    img: "./team/Griff_Green.webp",
  },
  {
    name: "Eduardo Antuña",
    role: "Founder and Product Lead",
    img: "./team/Eduardo_Antuna.webp",
  },
  {
    name: "Pol Bordas",
    role: "COO",
    img: "./team/Pol_Bordas.webp",
  },
  {
    name: "Pablo Mendez",
    role: "Product Manager",
    img: "./team/Pablo_Mendez.webp",
  },
  {
    name: "Diego Simon",
    role: "Software Engineer",
    img: "./team/Diego_Simon.avif",
  },
  {
    name: "Marc Font",
    role: "Software Engineer",
    img: "./team/Marc_Font.avif",
  },
  {
    name: "Mateu Miralles",
    role: "Full-Stack Developer",
    img: "./team/Mateu_Miralles.avif",
  },
  {
    name: "Clara Mendez",
    role: "e-commerce & Marketing",
    img: "./team/Clara_Mendez.webp",
  },
  {
    name: "Patricia Zamora",
    role: "Administration & finance",
    img: "./team/Patricia_Zamora.avif",
  },
  {
    name: "Chuy Garcia",
    role: "Community Manager",
    img: "./team/Chuy_Garcia.avif",
  },
];

const About: React.FC = () => {
  return (
    <motion.div
      id="about"
      className="flex min-h-screen flex-col items-center justify-around bg-cover text-center  "
      style={{
        backgroundImage:
          'url("https://example.com/path-to-your-background-image.jpg")',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="px-5 lg:mb-32 lg:px-20 lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-5 lg:gap-10 ">
          <h3>About us</h3>
          <h2>Dappnode's mission</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-28 ">
          <div className="flex w-full flex-col justify-center gap-10 leading-10 lg:w-1/2">
            <p>
              Our goal is to advance the decentralization of the internet. We
              seek a world composed of self-sovereign individuals, where
              freedom, privacy, and censorship resistance are indisputable
              values of our society.
            </p>
            <p>
              In order to achieve this vision, we work hard to provide a
              decentralized infrastructure layer accessible to everyone.
            </p>
            <p>
              Our software is the medium but the people have the power, by
              running their own nodes in their homes. Whatever network you want
              to power, Dappnode is there to simplify your task and facilitate a
              world where everyone can have their own gateway to web3.
            </p>{" "}
            <p>
              That’s why we need{" "}
              <span className="font-modeg font-bold text-dappnodePurple">
                YOU
              </span>{" "}
              to participate in this movement.
            </p>
          </div>
          <div className="my-10 flex w-full flex-col justify-center lg:w-1/2">
            <img src="decentralization_dappnodes.png" alt="decentralization" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-dappnodePurple px-5 py-28 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {" "}
        <div className="flex flex-col gap-20">
          <h2 className="text-dappnodeDarkText">Our team</h2>
          <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {" "}
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col items-center space-y-1 ${
                  index >= 11 ? "col-span-2" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-40 w-40 rounded-full object-cover shadow-lg md:h-32 md:w-32"
                  />
                  <div className="mt-5">
                    <p className="text-md font-semibold text-white">
                      {member.name}
                    </p>
                    <p className=" text-sm text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
