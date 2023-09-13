const Button = ({ id, text, width, active, setActive }) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`${width} ${
        active === id ? "bg-blue" : "bg-blueLigher"
      } rounded-full text-white py-1`}
    >
      {text}
    </button>
  );
};

export default Button;
