import React, { useState } from "react";    

function UpdateBroad() {
    return (  
        <>
            <div className="update-wrapper">
                <h2>Update Broad</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="form-control" id="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dueDate">Due Date:</label>
                            <input type="date" className="form-control" id="dueDate" />
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
                            <input type="text" className="form-control" id="label" />
                        </div>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateBroad;