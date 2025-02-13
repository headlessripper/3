import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image

const Blog: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; img: string | null }[]>([]);
  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (message || image) {
      setMessages([...messages, { text: message, img: image }]);
      setMessage('');
      setImage(null);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteMessage = (index: number) => {
    const newMessages = messages.filter((_, i) => i !== index);
    setMessages(newMessages);
  };

  return (
    <section className="blog-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">Blog</h3>
          <p>a platform to express yourself</p>
        </div>
        
        {/* Chat Section */}
        <div className="chat-section mt-5 p-3 border rounded">
          <h4>Chat with Others</h4>
          <div className="messages border p-2 mb-2">
            {messages.map((msg, index) => (
              <div key={index} className="message border p-2 rounded my-2">
                {msg.text && <p>{msg.text}</p>}
                {msg.img && (
                  <Image
                    src={msg.img}
                    alt="Uploaded"
                    width={100}
                    height={100} // Define a height for better optimization
                  />
                )}
                {/* Delete button */}
                <button 
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => handleDeleteMessage(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex flex-column gap-3">
            {/* Text input with label */}
            <label htmlFor="messageInput" className="visually-hidden">Message</label>
            <input
              id="messageInput"
              type="text"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            {/* File input with label */}
            <label htmlFor="fileInput" className="visually-hidden">Upload Image</label>
            <input 
              id="fileInput" 
              type="file" 
              onChange={handleImageUpload} 
              className="form-control mb-3" 
            />
            <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
