import ListItem from "./listitem";

export default function List(props) {
  const { tasks, setTasks } = props;
  // const todos = [
  //   {
  //     id: 1,
  //     text: "Task 1",
  //     isCompleted: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Task 2",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     text: "Task 3",
  //     isCompleted: false,
  //   },
  // ];
  return (
    <ul className="list-group">
      {tasks.map((task) => {
        const { id, status } = task;
        return (
          <ListItem
            key={id}
            {...task} // property names cloned wholesale
            onDelete={(id) => {
              setTasks(tasks.filter((task) => task.id !== id));
            }} // defined here '.' setTasks not in listitem.js
            onUpdate={(id, status) => {
              setTasks(
                tasks.map((task) =>
                  task.id === id
                    ? { ...task, status: status === 0 ? 1 : 0 }
                    : task
                )
              );
            }}
          />
        );
      })}
    </ul>
  );
}
