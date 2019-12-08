import React from "react";

export const TodoHeader = (props: React.PropsWithChildren<any>) => (
    <div className="row">
    <div className="col-md-8">
      <h5>Pending Items</h5>
    </div>
    <div className="col-md-4">
    {props.children}
    </div>
  </div>
);
