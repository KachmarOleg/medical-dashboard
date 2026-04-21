export default function Avatar({ imgSrc, width = 44, height = 44 }) {
  return <img src={imgSrc} alt="User avatar" width={width} height={height} />;
}
