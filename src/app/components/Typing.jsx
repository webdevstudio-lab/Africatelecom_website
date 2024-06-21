import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "En Télécom",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "En Génie civil",
        1000,
        "En Energie",
        1000,
        "En Tout Genre",
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "1em", display: "inline-block", color: "#3B82F6" }}
      repeat={Infinity}
    />
  );
};
