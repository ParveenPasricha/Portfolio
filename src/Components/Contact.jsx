import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contact = () => {
  function Download() {
    const DownloadFile =
      "https://drive.google.com/uc?export=download&id=1kFQ8A-uqqzXc6CTHKJDrZyvEsIybAJ4F";
    console.log(DownloadFile);
    window.location.href = DownloadFile;
  }
 
  return (
    <div className="items-center justify-center text-3xl flex flex-col px-4 sm:px-8 md:px-12">
      <label className="m-6">Download My CV</label>
      <button className="text-3xl px-48 bg-yellow-500 w-96" onClick={Download}>
        <FaCloudDownloadAlt />
      </button>
    </div>
  );
};

export default Contact;
