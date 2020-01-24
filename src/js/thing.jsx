import React from "react";

export function RenderSomething({ something = 'Oops This is wrong' }) {
  return (
    <div>
      <p>
        We can render "{something}"
      </p>
      <p>{data}</p>
    </div>
  );
}
