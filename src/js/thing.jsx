import React, { useState, useEffect } from "react";

async function fetchData(setData) {
  const data = await fetch('http://localhost:3000/data').then(r => r.json());
  setData(JSON.stringify(data));
}

export function RenderSomething({ something = 'Oops This is wrong' }) {
  const [data, setData] = useState(<React.Fragment>&nbsp;</React.Fragment>);

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
