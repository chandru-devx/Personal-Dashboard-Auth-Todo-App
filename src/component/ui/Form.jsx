import { useContext, useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import { taskContext } from "../../taskProvider/TaskContext";
import toast from "react-hot-toast";


const Form = () => {

  const [text, setText] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState("")

  const { addTasks, editState, updateTask ,setEditState} = useContext(taskContext)



  const handleChange = (e) => {
    // console.log(e.target.value)
    const value = (e.target.value)
    setText(value)

    if (value.length === 0) {
      setMessage(null)
      setDisabled(false)
    } else if (value.length <= 10) {
      setMessage("Fill at least 10 characters")
      setDisabled(true)

    } else {
      setDisabled(false)
      setMessage("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      setMessage("Kindly fill the field");
      setDisabled(false);

      setTimeout(() => {
        setMessage(null);
        setDisabled(false);
      }, 3000); // 3 seconds

      return;
    }


    if (text.trim().length <= 10) return;

    if (editState.isEditing) {
      updateTask(editState.item.id, text);
      setEditState({ isEditing: false });
    } else {
      addTasks(text); // 🔥 only send string
    }

    toast.success("Task added");
    setText("");
  };



  useEffect(() => {
    if (editState.isEditing) {
      setText(editState.item.text);
      setDisabled(false);
    }
  }, [editState]);


  return (
    <Card >
      <form onSubmit={handleSubmit} className="space-y-6 ">


        {/* Input */}
        <div>
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Review
          </label>

          <input
            onChange={handleChange}
            id="review"
            type="text"
            placeholder="Write your review..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={text}
          />
          {message && <p className="text-red-600 mt-2 text-sm">{message}</p>}
        </div>

        {/* Action */}
        <div className="flex justify-end">
          <Button type="submit" variant="primary" disabled={disabled}>
            {editState.isEditing ? "Update" : "Submit"}
          </Button>

        </div>





      </form>
    </Card>
  );
};

export default Form;
