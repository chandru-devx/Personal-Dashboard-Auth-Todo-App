const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-2xl mx-auto mt-2">
      {children}
    </div>
  );
};

export default Card;
