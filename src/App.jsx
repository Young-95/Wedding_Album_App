import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "./App.css";
import Challenge from "./Challenge";

// 🔑 Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBSHOuKkMBmd9SShO-o6Ev-1ze88RK4iac",
    authDomain: "wedding-album-app-29b96.firebaseapp.com",
    databaseURL: "https://wedding-album-app-29b96-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wedding-album-app-29b96",
    storageBucket: "wedding-album-app-29b96.firebasestorage.app",
    messagingSenderId: "884419894650",
    appId: "1:884419894650:web:7cfeb5a6c50384de1e8ac3",
    measurementId: "G-MPMQ83CM43"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function UploadOnly() {
  const eventId = "wedding2026"; // could come from URL
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  
  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setStatus(`📷 File ready to upload: ${f.name}`);
    }
  };

  const uploadPhoto = async () => {
    if (!file) return;
    try {
      const storageRef = ref(storage, `events/${eventId}/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);
      setStatus("✅ Thanks for sharing a photo!");
      setFile(null);
    } catch (err) {
      setStatus("❌ Upload failed, please try again.");
    }
  };

  return (
    <>
      <div className="app-container">
        <h1>Young's Wedding 2026</h1>
        <img src="placeholder.jpg" alt="Sophia" />
        <Challenge />
        
        <div className="upload-container">
          <label class="custom-file-upload">
          Upload from Gallery
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          </label>
          <label for="file-upload" class="custom-file-upload">
            Take a photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
          />
           {file && (
            <button onClick={uploadPhoto}>Upload</button>
          )}
          {status && <p>{status}</p>}
        </div>
      </div> 
    </>
  )
}

