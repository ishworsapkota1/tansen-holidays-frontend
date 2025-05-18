import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="my-20 p-20 flex justify-between flex-row mx-auto">
      <div>
        <div>
          <Image width={500} height={500} src="/Vehivle/bus.jpeg" alt=".." />
        </div>
        <p>Image part</p>
      </div>
      <div className="w-3xl">
        Information part Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum error ea sunt ex ratione unde corrupti eveniet nostrum
        labore debitis.
      </div>
    </div>
  );
};

export default page;
