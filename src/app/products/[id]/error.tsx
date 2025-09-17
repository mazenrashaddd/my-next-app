"use client";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xl font-bold text-gray-300">
        An error occured while trying to fetch this product
      </span>
      <button
        className="bg-indigo-500 px-3 py-1 rounded-md cursor-pointer"
        onClick={() => {
          reset();
        }}
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
