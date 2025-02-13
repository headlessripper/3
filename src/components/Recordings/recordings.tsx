import React, { useState, useEffect } from "react";
import axios from "axios";

const Recordings = () => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null); // Explicitly typing as File | null

  useEffect(() => {
    // Check if the user session is verified
    const checkSession = async () => {
      try {
        const response = await axios.get("/api/check-session");
        if (response.data.verified) {
          setVerified(true);
        }
      } catch (error) {
        console.error("Session check failed", error);
      }
    };
    checkSession();
  }, []);

  const sendOtp = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.post("/api/send-otp", { email: "kurwyn@gmail.com" });
      setOtpSent(true);
    } catch {
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp.trim()) {
      alert("Please enter the OTP.");
      return;
    }
    try {
      const response = await axios.post("/api/verify-otp", { otp });
      if (response.data.success) {
        setVerified(true);
      } else {
        alert("Invalid OTP.");
      }
    } catch {
      alert("Error verifying OTP.");
    }
  };

  const authenticateAdmin = async () => {
    try {
      const response = await axios.post("/api/admin-auth", { password: adminPassword });
      if (response.data.success) {
        setIsAdmin(true);
        setShowAdminPanel(true);
      } else {
        alert("Incorrect password.");
      }
    } catch {
      alert("Error authenticating admin.");
    }
  };

  const handleVideoUpload = async () => {
    if (!videoFile) {
      alert("Please select a video file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await axios.post("/api/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        alert("Video uploaded successfully!");
      } else {
        alert("Failed to upload video.");
      }
    } catch {
      alert("Error uploading video.");
    }
  };

  if (!verified) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {!otpSent ? (
          <button onClick={sendOtp} className="bg-blue-500 text-white p-2 rounded">
            Send OTP
          </button>
        ) : (
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="border p-2 rounded"
            />
            <button onClick={verifyOtp} className="ml-2 bg-blue-500 text-white p-2 rounded">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <input
          type="password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          placeholder="Enter Admin Password"
          className="border p-2 rounded"
        />
        <button onClick={authenticateAdmin} className="ml-2 bg-red-500 text-white p-2 rounded">
          Authenticate Admin
        </button>
      </div>
    );
  }

  if (showAdminPanel) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2>Admin Panel: Upload Videos Here</h2>

        {/* Label for accessibility */}
        <label htmlFor="video-upload" className="mb-2 text-gray-700">
          Upload Video
        </label>

        {/* File input with title and placeholder */}
        <input
          type="file"
          id="video-upload"
          onChange={(e) => setVideoFile(e.target.files ? e.target.files[0] : null)}
          accept="video/*"
          className="border p-2 rounded"
          title="Click to select a video file to upload"
          placeholder="Choose a video file"
        />

        <button onClick={handleVideoUpload} className="mt-2 bg-green-500 text-white p-2 rounded">
          Upload Video
        </button>
      </div>
    );
  }

  return <div>Authenticated! You can now access recordings.</div>;
};

export default Recordings;
