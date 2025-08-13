import React from "react";
import Card from "./Card";

const PackageColumn = ({ title, tasks = [], status, deletehandler }) => {
  return (
    <>
      <h6 className='text-primary border-bottom my-3'>{title}</h6>
      <div className='row'>
        {
          // tasks.map((task,index)=>{
          // 	if(task.package === status){

          // 		return	<Card key = {index}
          // 										name = {task.name}
          // 										qty = {task.quantity}
          // 										pkg = {task.package}
          // 										tags = {task.tags}
          // 										deletehandler = {deletehandler}
          // 										idxkey = {index}

          // 										/>
          // 	}
          // })


          // tasks.map((task, index) => (task.package === status ? <Card key={index} name={task.name} qty={task.quantity} pkg={task.package} tags={task.tags} deletehandler={deletehandler} idxkey={index} /> : null))

										
          // In React , you can use && Inline Conditional Rendering ( React JSX )
          tasks.map((task, index) => task.package === status && <Card key={index} name={task.name} qty={task.quantity} pkg={task.package} tags={task.tags} deletehandler={deletehandler} idxkey={index} />)
        }
      </div>
    </>
  );
};

export default PackageColumn;

// 19
