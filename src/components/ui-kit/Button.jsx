import clsx from "clsx";

export default function Button(props) {
  const { children, outline, className, ...rest } = props;
  let classes = clsx(
    {
      btn: true,
      "btn-outline": outline === true ? true : false,
      "btn-default": outline === true ? false : true,
    },
    className
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
