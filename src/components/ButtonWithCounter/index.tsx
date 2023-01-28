import { useState } from "react";
import Button from "../button";

export default function ButtonWithCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-[#262d36] rounded-md flex items-center justify-center gap-4 p-6 my-4 border border-slate-700">
      <div className="h-auto flex items-start justify-center w-2/3 gap-4">
        <Button
          testId="increment"
          buttonText="Increase Counter by 10"
          onClick={() => setCounter(counter + 10)}
        />
        <Button
          testId="decrement"
          buttonText="Decrease Counter by 10"
          onClick={() => (counter === 0 ? null : setCounter(counter - 10))}
        />
        <Button
          testId="reset"
          buttonText="Reset Counter"
          onClick={() => setCounter(0)}
        />
      </div>
      <div className="h-auto flex items-center justify-center w-1/3">
        <p
          data-testid="counter"
          className="p-4 bg-white-primary text-gray-800 font-bold text-sm rounded-md"
        >
          Counter: {counter}
        </p>
      </div>
    </div>
  );
}
