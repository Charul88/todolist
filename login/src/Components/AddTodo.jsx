import React from "react";

export default function AddTodo() {
  return (
    <div>
      <form>
        <div className="pt-4">
          <div className="row">
            <div className="col-5">
              <input
                type="text"

                class="form-control"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
            <div className="col-5">
              <input
                type="date"
            
                class="form-control"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
            <div className="col-1">
              <button type="button" class="btn btn-success">
                Success
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
