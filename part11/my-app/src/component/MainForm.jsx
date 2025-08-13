import React, { useState } from "react";
import Tag from "./Tag";

const MainForm = ({ settasks }) => {
  const defaultselectvalue = "Choose a package";

  const [formState, setFormState] = useState({
    name: "",
    quantity: 1,
    tags: [],
    package: "",
  });

  const changeHandler = (e) => {
    // const name = e.target.name;
    // const value = e.trget.value;
    // console.log(name,value);

    // setFormState({
    //   ...formState,
    //   [e.target.name]: e.target.value,
    // });

    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(formState);

    settasks((prev) => {
      return [...prev, formState];
    });

    setFormState({
      name: "",
      quantity: 1,
      tags: [],
      package: "",
    });
  };

  const selectedtag = (tagname) => {
    // check if "tagname" is in the array ! return true or flase

    return formState.tags.some((tag) => tag === tagname);
  };

  const checkedtag = (tagname) => {
    if (formState.tags.some((tag) => tag === tagname)) {
      const filtertags = formState.tags.filter((tag) => tag !== tagname);

      setFormState((prev) => {
        return { ...prev, tags: filtertags };
      });
    } else {
      setFormState((prev) => {
        return { ...prev, tags: [...prev.tags, tagname] };
      });
    }
  };

  return (
    <div>
      <form action='' method='' onSubmit={submitHandler}>
        <div className='row'>
          <div className='form-group col-md-6 mb-3'>
            <label htmlFor='name'>Customer Name</label>
            <input type='text' name='name' id='name' className='form-control form-control-sm rounded-0' placeholder='Enter Name' onChange={changeHandler} value={formState.name} />
          </div>

          <div className='form-group col-md-6 mb-3'>
            <label htmlFor='quantity'>Quantity</label>
            <input type='number' name='quantity' id='quantity' className='form-control form-control-sm rounded-0' onChange={changeHandler} value={formState.quantity} />
          </div>

          <div className='form-group col-md-6 mb-3'>
            <label>Choose Tag</label>
            <div>
              <Tag tagname='Washing' checktag={checkedtag} selected={selectedtag("Washing")} />
              <Tag tagname='Drying' checktag={checkedtag} selected={selectedtag("Drying")} />
              <Tag tagname='Delivery' checktag={checkedtag} selected={selectedtag("Delivery")} />
            </div>
          </div>

          <div className='form-group col-md-6 mb-3'>
            <label htmlFor='package'>Package</label>
            <select type='number' name='package' id='package' className='form-select form-control-sm rounded-0' onChange={changeHandler} value={formState.package}>
              <option value='' disabled>
                {defaultselectvalue}
              </option>
              <option value='regular'>Regular</option>
              <option value='urgent'>Urgent</option>
            </select>
          </div>

          <div className='d-grid mb-3'>
            <button type='submit' className='btn btn-primary btn-sm rounded-0'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainForm;

// 26TC
