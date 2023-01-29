import { useState } from "react";
import Button from "../button";

export default function ButtonWithCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-element p-6">
      <div className="h-auto flex flex-col md:flex-row md:items-center items-start justify-center w-2/3 gap-4">
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
      <div className="h-auto w-1/3">
        <p
          data-testid="counter"
          className="bg-white-primary text-gray-800 font-bold text-sm rounded-md px-4 py-3 text-center w-32 mx-auto"
        >
          Counter: {counter}
        </p>
      </div>
    </div>
  );
}
