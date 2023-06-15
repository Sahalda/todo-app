function TaskInput(inputcomponentdata: inputcomponentdata) {
  return (
    <div>
      <p style={{ color: inputcomponentdata.colorChange }}>What to Do?</p>
      <p>{inputcomponentdata.greeting}</p>
      <p style={{borderStyle:inputcomponentdata.borderStyle}}></p>
      <p style={{borderColor:inputcomponentdata.borderColor}}></p>
    </div>
  );
}
type inputcomponentdata = {
  colorChange: string;
  greeting: string;
  borderStyle: string; 
  borderColor: string;
};

export default TaskInput;
