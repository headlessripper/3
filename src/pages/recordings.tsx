
import Recordings from "@/components/Recordings/recordings";
import React from "react";


const RecordingsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Recordings</h1>
      <Recordings />
    </div>
  );
};

export default RecordingsPage;
