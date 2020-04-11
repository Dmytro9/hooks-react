import React from "react";

export const Square = React.memo(({ n, increment }) => {
  return <button onClick={() => increment(n)}>{n}</button>;
});
