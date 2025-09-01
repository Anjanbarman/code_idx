import React from "react";

const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <img
        src="/empty-state.svg"
        alt="No Projects Found"
        className="w-48 h-48 mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-500">No Projects Found</h2>
      <p className="text-gray-400">Create a new project to get started.</p>
    </div>
  );
};

export default EmptyState;
