"use client"
import { uploadResume } from "@/lib/utils";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";



const ResumeUploader: React.FC = () => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    
    if (!file) return;

    // ✅ Validate PDF
    if (file.type !== "application/pdf") {
      setMessage("❌ Only PDF files are allowed");
      return;
    }

    setFileName(file.name);
    setLoading(true);
    setMessage("");

    try {
        console.log(file)
      await uploadResume(file);
      setMessage("✅ Resume updated successfully");
    } catch (error) {
        console.log(error)
      setMessage("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/5 backdrop-blur rounded-2xl shadow-lg border border-white/10">
      
      <h2 className="text-lg font-semibold text-white mb-4 text-center">
        Update Resume
      </h2>

      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-500 rounded-xl cursor-pointer hover:border-white transition">
        
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl mb-2">📄</span>
          <p className="text-sm text-gray-300">
            {loading ? "Uploading..." : "Click to upload PDF"}
          </p>
        </div>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {fileName && (
        <p className="mt-3 text-sm text-gray-400 text-center">
          Selected: {fileName}
        </p>
      )}

      {message && (
        <p className="mt-3 text-sm text-center text-gray-200">
          {message}
        </p>
      )}
    </div>
  );
};

export default ResumeUploader;