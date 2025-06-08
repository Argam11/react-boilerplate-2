interface ImageProps {
  path?: string | null;
  title?: string;
  style?: React.CSSProperties;
}

export const Image = ({ path, title = "", style }: ImageProps) => {
  return (
    <img
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        minHeight: "300px",
        ...style,
      }}
      src={`https://image.tmdb.org/t/p/w342/${path}`}
      alt={title}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = "/assets/image-placeholder.jpg";
      }}
    />
  );
};
