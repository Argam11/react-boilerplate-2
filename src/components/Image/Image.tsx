import { PLACEHOLDER_IMAGE_PATH } from "@constants/common";

interface ImageProps {
  src?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const Image = ({ src, title = "Image", style, ...rest }: ImageProps) => {
  const validSrc = src || PLACEHOLDER_IMAGE_PATH;

  return (
    <img
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        minHeight: "300px",
        ...style,
      }}
      src={validSrc}
      alt={title}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = PLACEHOLDER_IMAGE_PATH;
      }}
      {...rest}
    />
  );
};
