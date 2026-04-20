export default function Avatar({ imgSrc, imgSrc2x, width = 44, height = 44 }) {
  return <img src={imgSrc} alt="User avatar" width={width} height={height} />;
}
