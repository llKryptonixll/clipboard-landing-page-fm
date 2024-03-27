const Button = ({ textContent, bgColor }) => {
  return (
    <button className={`${bgColor} px-9 py-4 rounded-full text-xl text-white hover:bg-opacity-80 transition-all font-medium`}>
      {textContent}
    </button>
  );
};

export default Button;

