export const Heart = ({
  size,
  className,
  img = "https://c.animaapp.com/eEKKbWZp/img/size-48.svg",
}) => {
  return (
    <img
      className={`absolute top-0 left-0 w-12 h-12 ${className}`}
      alt="Size"
      src={img}
    />
  );
};
