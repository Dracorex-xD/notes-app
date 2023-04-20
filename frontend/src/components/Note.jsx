export const Note = (props) => {

  return (
    <div className="Note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <div className="timestamp">{props.time}</div>
    </div>
  );
}
