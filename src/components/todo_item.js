export default function TodoItem(task) {
  const { label } = task;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button className="btn btn-sm btn-light">
          <i className="bi bi-check-square"></i>
        </button>
        <span className="ms-2">{label}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
