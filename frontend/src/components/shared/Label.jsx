const Label = ({ labelName }) => {
  return (
    <div>
      <label
        htmlFor={labelName}
        className="block text-xs font-medium text-gray-700"
      >
        {labelName}
      </label>
    </div>
  );
};

export default Label;
