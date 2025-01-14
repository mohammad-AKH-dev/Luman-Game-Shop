export default function FormInput({
  title,
  Change,
  Value,
  name,
  children,
  type,
  style,
  inputStyle,
  labelMargin,
  required,
  placeholder,
  accept
}) {
  return (
    <>
      <label
        htmlFor="name"
        className={`text-[#FFFFFF99] ${
          style ? "flex w-fit -ml-8" : ""
        } ${labelMargin}`}
      >
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      <div
        className={`input-wrapper ${
          style ? style : ""
        } my-4 rounded-xl focus-within:border-[#ffffff59] border relative p-[6px] border-[#ffffff3b]`}
      >
        <input
          type={type}
          accept={accept && accept}
          placeholder={placeholder ? placeholder : ''}
          className={`input-form ${inputStyle ? inputStyle : ""} ${
            children ? "w-[90%]" : "w-full"
          } text-[14px]
          bg-primary outline-none`}
        />
        {children}
      </div>
    </>
  );
}
