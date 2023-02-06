function Card(props) {
  return (
    <div
      className={`rounded-lg bg-white drop-shadow-xl p-6 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
