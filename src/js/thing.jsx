import React, { useState, useEffect } from "react";

import "core-js/stable";
import "regenerator-runtime/runtime";

async function fetchData(setData) {
  const data = await fetch('http://localhost:3000/data').then(r => r.json());
  setData(
    JSON.stringify(data),
  );
}

export function RenderSomething({ something = 'Oops This is wrong' }) {
  const [data, setData] = useState('.');

  useEffect(() => {
    fetchData(setData)
  }, []);

  return (
    <div>
      <p>
        We can render "{something}"
      </p>
      <p>
        {data}
      </p>
    </div>
  );
}
