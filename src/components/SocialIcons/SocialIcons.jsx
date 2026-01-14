export const SocialIcons = ({
  platform,
  color,
  className,
  platformInstagram = "https://c.animaapp.com/eEKKbWZp/img/platform-instagram--color-negative.svg",
  platformFacebook = "https://c.animaapp.com/eEKKbWZp/img/platform-facebook--color-negative.svg",
  platformLinkedin = "https://c.animaapp.com/eEKKbWZp/img/platform-linkedin--color-negative.svg",
  platformXTwitter = "https://c.animaapp.com/eEKKbWZp/img/platform-x--twitter---color-negative.svg",
}) => {
  return (
    <img
      className={`w-12 left-0 top-0 h-12 absolute ${className}`}
      alt="Platform linkedin"
      src={
        platform === "instagram"
          ? platformInstagram
          : platform === "x-twitter"
            ? platformXTwitter
            : platform === "facebook"
              ? platformFacebook
              : platformLinkedin
      }
    />
  );
};
