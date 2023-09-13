interface PropsType {
  id: number;
  text: string;
  width: string;
  active: number;
  setActive: (id: number) => void;
}

const Button = ({ id, text, width, active, setActive }: PropsType) => {
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
