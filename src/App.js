import { useState } from "react";

import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      {/* Stacking context 1 */}
      <div
        className="relative z-10"
        onClick={(evt) => console.log(evt.target, evt.currentTarget)}
      >
        {/* Open Modal Button */}
        <button
          onClick={setIsOpen.bind(this, true)}
          className="px-8 py-4 border border-gray-800 block mx-auto rounded-full"
        >
          Open Modal
        </button>

        {/* Modal */}
        <Modal open={isOpen} onClose={setIsOpen.bind(this, false)}>
          Hello
        </Modal>
      </div>

      {/* Stacking context 2 */}
      <p className="relative z-20 bg-gray-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        accusantium similique repudiandae dignissimos, dolorem adipisci, soluta
        eum cupiditate illo asperiores modi dolorum est officiis labore quia
        voluptate natus? Laudantium voluptatibus, at incidunt animi, excepturi
        optio veniam, vel nesciunt officia explicabo pariatur nam ex laborum
        autem tenetur accusamus ad itaque neque expedita repellat? Ad nisi
        tenetur iste itaque quidem corrupti eum repudiandae ipsa, sit excepturi
        at sed voluptates inventore a, earum beatae eligendi qui consequuntur
        fuga? Aspernatur rem impedit soluta dolores iure! Asperiores provident
        ab ut impedit similique ipsum error, excepturi enim eaque fuga porro
        voluptates doloremque doloribus dolorem, iusto officiis velit adipisci
        soluta amet. Dolore fugiat consequatur a et molestiae pariatur veritatis
        repellat, quidem voluptate, voluptatum facilis, harum nisi ea porro
        ipsam accusamus quasi vel reiciendis unde obcaecati. Eveniet magnam nisi
        facere animi nulla autem sed eum delectus at porro illum ex cumque
        dolore blanditiis deleniti sequi laborum earum itaque, eaque tempora
        fuga architecto ipsa quia. Dignissimos impedit suscipit, adipisci
        recusandae praesentium ab consectetur iusto in pariatur autem minus
        quidem distinctio at sunt dicta nobis optio, molestias laudantium totam
        eveniet perspiciatis. Tempore, mollitia? Eius accusantium, at totam
        saepe molestias, laborum possimus architecto, voluptatibus mollitia
        numquam nisi dolore itaque molestiae ipsa. Fugiat quo facere beatae
        similique numquam iure dolores commodi veniam, maxime harum molestiae.
        Quaerat, cupiditate omnis. Ad aliquam eaque magnam possimus officiis
        optio quibusdam officia magni! Dolorem officiis dolores explicabo earum
        illum pariatur quis totam. Aliquid enim sapiente neque consectetur,
        distinctio cumque possimus. Error eveniet et distinctio commodi iste
        mollitia ratione itaque animi possimus ea hic, at aut sunt deserunt
        officia reiciendis optio cum, esse porro placeat inventore odio deleniti
        suscipit! Nobis aspernatur neque maiores ea voluptatibus voluptatum?
        Consequatur, adipisci? Culpa at quo, exercitationem provident, iusto ea
        accusantium ut mollitia vitae eligendi rem explicabo adipisci cumque
        debitis aliquam repellat totam.
      </p>
    </div>
  );
};

export default App;
