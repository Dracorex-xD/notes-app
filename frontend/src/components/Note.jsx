export const Note = (props) => {
  return (
    <div className="Note">
      <h1 className="note-title">{props.title}</h1>
      <p className="note-text">{props.text}</p>
      <div className="timestamp">{props.time}</div>
    </div>
  );
}
