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
  storageBucket: "wedding-album-app-29b96.appspot.com", // ✅ corrected
  messagingSenderId: "884419894650",
  appId: "1:884419894650:web:7cfeb5a6c50384de1e8ac3",
  measurementId: "G-MPMQ83CM43"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function UploadOnly() {
  const eventId = "wedding2026";
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setPreviewUrl(URL.createObjectURL(f)); // 🔑 create a preview thumbnail
      setStatus("📷 File ready to upload");
    }
  };

  const uploadPhoto = async () => {
    if (!file) return;
    setStatus("⏳ Uploading...");
    try {
      const storageRef = ref(storage, `events/${eventId}/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);
      setStatus("✅ Thanks for sharing a photo!");
      setFile(null);
      setPreviewUrl(null);
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload failed, please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1>Young's Wedding 2026</h1>
      <img className="couple-img" src="placeholder.jpg" alt="Sophia" />
      <Challenge />

      <div className="upload-container">
        <label className="custom-file-upload">
          Upload from Gallery
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>

        <label htmlFor="file-upload" className="custom-file-upload">
          Take a photo
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Thumbnail preview if file selected */}
        {previewUrl && (
          <div className="preview-container">
            <p>{status}</p>
            <img
              src={previewUrl}
              alt="Preview"
              className="preview-image"
            />
          </div>
        )}

        {/* Upload button */}
        <button onClick={uploadPhoto} disabled={!file}>
          Upload
        </button>

        {/* Status text (success, error, uploading) */}
        {status && !previewUrl && <p>{status}</p>}
      </div>
    </div>
  );
}


