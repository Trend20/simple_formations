const Button = ({ children, onClick, classNames }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${classNames} inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
