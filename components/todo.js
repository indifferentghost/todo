function Todo({ text, complete }) {
  return (
    <div>
      <input type="checkbox" checked={complete} />
      <span>{text}</span>
    </div>
  );
}

export default Todo;
