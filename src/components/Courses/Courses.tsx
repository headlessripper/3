import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';

type Props = {};

const Courses = (props: Props) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  // Define the grade URLs with a more specific type
  const gradeUrls: Record<'Grade 10' | 'Grade 11' | 'Grade 12', string> = {
    'Grade 10': 'https://bo-baas-grade10.vercel.app/',
    'Grade 11': 'https://bo-baas.vercel.app/',
    'Grade 12': 'https://bo-baas-grade12.vercel.app/',
  };

  const sendOtp = async (grade: keyof typeof gradeUrls) => {
    try {
      await axios.post('/api/send-otp', { email: 'kurwyn@gmail.com' });
      setOtpSent(true);
      setRedirectUrl(gradeUrls[grade]);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('/api/verify-otp', { otp });
      if (response.data.success) {
        setVerified(true);
        window.location.href = redirectUrl;
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <section className="service-area area-padding flex justify-center items-center text-center">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">Courses</h3>
          <h4>Our premium courses ensure excellence and lasting results.</h4>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {Object.keys(gradeUrls).map((grade, index) => (
            <div 
              key={index} 
              className="w-64 p-4 bg-white shadow-lg rounded-lg cursor-pointer" 
              onClick={() => sendOtp(grade as keyof typeof gradeUrls)}
            >
              <div className="service-icon flex justify-center">
                <Image width={92} height={92} src={`/images/i${index + 1}.png.webp`} alt={grade} />
              </div>
              <div className="service-content mt-4">
                <h5 className="text-lg font-semibold">{grade}</h5>
              </div>
            </div>
          ))}
        </div>
        {otpSent && !verified && (
          <div className="mt-4">
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              placeholder="Enter OTP" 
              className="border p-2"
            />
            <button onClick={verifyOtp} className="ml-2 bg-blue-500 text-white p-2 rounded">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
