const InputField = ({ value, type, placeholder, onChange, classNames }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id="UserEmail"
        onChange={onChange}
        className={`${classNames} mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-4`}
      />
    </div>
  );
};

export default InputField;
