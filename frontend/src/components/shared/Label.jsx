const Label = ({ labelName, labelFor }) => {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className="block text-xs font-medium text-gray-700"
      >
        {labelName}
      </label>
    </div>
  );
};

export default Label;
