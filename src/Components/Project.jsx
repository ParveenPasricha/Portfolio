import React from "react";

const Project = () => {
  return (
    <div>
      <h1 className="text-black font-bold text-2xl">Our Project</h1>
      <hr className="border-t-2 border-black mx-20" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-24">
        {/*First Image */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-left mx-4 my-8">
            January 2025
          </h1>
          <img
            className="w-60 h-60 rounded-full cursor-pointer hover:opacity-45 ease-in-out"
            src="https://strapi.dhiwise.com/uploads/how_are_ai_code_generators_revolutionizing_software_development_og_image_6530b2254b0bf_466823b8ba.webp"
            onClick={() => {
              window.open("https://portfolio-six-rust-35.vercel.app/", "blank");
            }}
          />
        </div>
        {/*Second Iamge  */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-left mx-4 my-8 ">
            January 2025
          </h1>
          <img
            className="w-60 h-60 rounded-full cursor-pointer hover:opacity-45 ease-in-out"
            src="https://cdn.openart.ai/published/d3INU5NS5zsxtR6k11uG/1KQ5CKtE_L2DY_1024.webp"
            onClick={() =>
              window.open("https://api-calling-sooty.vercel.app/", "blank")
            }
          />
        </div>
        {/* Third Image */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-left mx-4 my-8">
            December 2024
          </h1>
          <img
            className="w-60 h-60 rounded-full cursor-pointer hover:opacity-45"
            src="https://cdn.shopify.com/s/files/1/0070/5901/3716/files/coding_background.jpg?v=1688538955"
            onClick={() =>
              window.open("https://add-post-seven.vercel.app/", "blank")
            }
          />
        </div>
        {/* Forth Image */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-left mx-4 my-8">
            November 2024
          </h1>
          <img
            className="w-60 h-60 rounded-full cursor-pointer hover:opacity-45"
            src="https://png.pngtree.com/thumb_back/fw800/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg"
            onClick={() => window.open("", "blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
