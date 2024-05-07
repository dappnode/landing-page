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
    role: "Fro",
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
      className="min-h-screen flex flex-col md:flex-row justify-around items-center p-10 bg-cover"
      style={{
        backgroundImage:
          'url("https://example.com/path-to-your-background-image.jpg")',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full md:w-1/2 text-left space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Advancing Decentralization
        </h1>
        <p className="text-lg text-gray-900 dark:text-gray-200">
          Dappnode’s mission is to advance the decentralization of the internet.
          We seek a world composed of self-sovereign individuals, where freedom,
          privacy, and censorship resistance are indisputable values of our
          society.
        </p>
        <p className="text-lg text-gray-900 dark:text-gray-200">
          In order to achieve this vision, we work hard to provide a
          decentralized infrastructure layer accessible to everyone.
        </p>
        <p className="text-lg text-gray-900 dark:text-gray-200">
          Our software is the medium but the people have the power, by running
          their own nodes in their homes. Whatever network you want to power,
          Dappnode is there to simplify your task and facilitate a world where
          everyone can have their own gateway to web3.
        </p>
        <p className="text-lg text-gray-900 dark:text-gray-200">
          That’s why we need YOU to participate in this movement.
        </p>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 grid grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {team.map((member, index) => (
          <div
            key={member.name}
            className={`flex flex-col items-center space-y-1 ${
              index >= 11 ? "col-span-2" : ""
            }`}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-lg"
            />
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h2>
            <p className="text-sm text-gray-800 dark:text-gray-400">
              {member.role}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
