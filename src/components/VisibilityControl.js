export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

   const handleDelete = () => {
     if(window.confirm("Are u sure to want to delete it?")){
      cleanTasks()
     }
    }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label>Show Tasks Done</label>

      <button onClick={handleDelete}>CLEAR</button>
      
    </div>
  );
};
