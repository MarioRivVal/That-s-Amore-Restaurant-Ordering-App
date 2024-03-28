type ButtonProps = {
  text: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text = "", color = "", onClick }: ButtonProps) {
  return (
    <button
      className={`py-3 px-5 text-md text-gray-100 rounded-md bg-${color}-500 self-center hover:bg-${color}-600 `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
