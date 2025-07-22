import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contact = () => {
  function Download() {
    const downloadFile =
      "https://docs.google.com/document/d/1eVoNsLCBVwrokIs02Ect1X3PGoBOLEVy/edit?usp=sharing&ouid=115416944460699501084&rtpof=true&sd=true";

    console.log("Downloading from:", downloadFile);
    window.location.href = downloadFile;
  }

  return (
    <div className="items-center justify-center text-3xl flex flex-col px-4 sm:px-8 md:px-12">
      <label className="m-6">Download My CV</label>
      <button
        className="text-3xl px-48 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition duration-300 w-96 flex items-center justify-center gap-3"
        onClick={Download}
      >
        <FaCloudDownloadAlt />
        Download
      </button>
    </div>
  );
};

export default Contact;
