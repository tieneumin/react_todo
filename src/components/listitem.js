export default function ListItem(props) {
  // ListItem({name}) also works but parses variable (non-object) so no destructuring required
  const { id, name, status, onDelete, onUpdate } = props;
  return (
    <li className="list-group-item d-flex justify-content-between ">
      {status === 0 ? (
        // <div> included '.' React if-statements can only render 1 component/time
        <div>
          <button
            className="btn btn-sm btn-light"
            onClick={() => {
              onUpdate(id, status);
            }}
          >
            <i className="bi bi-square"></i>
          </button>
          <span className="ms-2">{name}</span>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-sm btn-success"
            onClick={() => {
              onUpdate(id, status);
            }}
          >
            <i className="bi bi-check-square"></i>
          </button>
          <span className="ms-2 text-decoration-line-through">{name}</span>
        </div>
      )}
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(id);
        }}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}
