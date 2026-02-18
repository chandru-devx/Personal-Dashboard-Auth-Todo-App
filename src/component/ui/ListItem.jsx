import { useContext } from "react";
import { taskContext } from "../../taskProvider/TaskContext";
import Card from "./Card"
import Button from "./Button";

const ListItem = ({ showActions = true }) => {

  const { tasks, deleteTask, editTask } = useContext(taskContext)

  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No tasks yet
      </p>
    );
  }


  return (
    <div className="mt-8 mb-8 px-6 flex flex-col gap-4">
      {tasks.map((item) => (
        <Card key={item.id}>
          <div className="flex items-center justify-between gap-4">

            {/* left side */}
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                className="w-4 h-4"
              />

              <p className="text-gray-800">
                {item.text}
              </p>
            </div>

            {showActions && (
              <div className="flex gap-2" >
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => editTask(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </Button>
              </div>)}

          </div>
        </Card>
      ))}
    </div>
  );
};

export default ListItem;
