import { useEffect, useState } from "react";

import MainForm from "./component/MainForm.jsx";
import PackageColumn from "./component/PackageColumn.jsx";


const oldtasks = localStorage.getItem("tasks");



const App = () => {

const [tasks,setTasks] = useState(JSON.parse(oldtasks) || [] );

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);


const deleteHandler = (taskindex) =>{
  const remaintasks = tasks.filter((task,index) => index !== taskindex);
  
  setTasks(remaintasks)
};

  return (
    <div className='container'>
      <div className='row'>
        <h3 className='text-center'>Laundry Services</h3>

        <div className='col-md-12'>
          <MainForm settasks={setTasks} />
        </div>

        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6'>
              <PackageColumn title='Regular Package' tasks={tasks} status='regular' deletehandler={deleteHandler} />
            </div>

            <div className='col-md-6'>
              <PackageColumn title='Urgent Package' tasks={tasks} status='urgent' deletehandler={deleteHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
