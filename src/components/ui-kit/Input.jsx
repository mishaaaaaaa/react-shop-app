import clsx from "clsx";

export default function Input(props) {
  console.log(props);
  const { placeholder, className, ...rest } = props;
  const classes = clsx(
    {
      input: true,
    },
    className
  );

  let inputType;

  if (props.type) {
    inputType = props.type;
  } else {
    inputType = "text";
  }

  return (
    <>
      <label className="label">
        {placeholder}
        {props.required && <span className="input-required">*</span>}
        <div>
          <input
            required={props.required ? true : false}
            type={inputType}
            placeholder={placeholder}
            className={classes}
            {...rest}
          />
        </div>
      </label>
    </>
  );
}
