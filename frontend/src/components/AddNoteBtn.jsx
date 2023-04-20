export const AddNoteBtn = () => {
  const onClickHandler = () => {
    console.log('test');
  };

  return (
    <div className='AddNoteBtn'>
      <button onClick={onClickHandler}>AddNoteBtn</button>
    </div>
  )
}
