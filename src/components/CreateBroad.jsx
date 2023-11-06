import React, { useState } from "react";

function CreateBroad() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due_date, setDueDate] = useState("");
  const [estimate, setEstimate] = useState("");
  const [assign, setAssign] = useState("");
  const [label, setLabel] = useState("");

  const handleCreateBroad = () => {
    
    
  };

  return (
    <>
    <div className="create-wrapper">
        <h2>Create Broad</h2>
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" name="description" id="description" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="due_date">Due Date:</label>
                    <input type="date" name="due_date" className="form-control" id="due_date" />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <label htmlFor="estimate">Estimate:</label>
                    <input type="text" className="form-control" id="estimate" />
                </div>
                <div className="form-group">
                    <label htmlFor="assign">Assign:</label>
                    <select name="assign" id="assign" className="form-control">
                        <option value="nhan">nhan</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="label">Label:</label>
                    <input type="text" name="label" className="form-control" id="label" />
                </div>
                <button className="btn btn-primary" onClick={handleCreateBroad}>Create Broad</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default CreateBroad;