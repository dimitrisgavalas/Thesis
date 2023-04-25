import React from "react";
import { Image } from "primereact/image";

const GalleriaFullScreenDemo = () => {
  return (
    <div className="surface-0 text-center">
      <div className="mb-3 font-bold text-2xl">
        <span className="text-900">Our Partners </span>
        {/* <span className="text-blue-600">Many Solutions</span> */}
      </div>
      <div className="text-700 text-sm mb-6">
        Universities that use E-Coursy.
      </div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-desktop text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Unipi</div>
          <span className="text-700 text-sm line-height-3">
            The no1. Digital Systems University.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-lock text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">ΕΜΠ</div>
          <span className="text-700 text-sm line-height-3">
            The best engineering University.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">ΠΑΔΑ</div>
          <span className="text-700 text-sm line-height-3">
            Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat
            ac tincidunt vitae semper.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">ΑΣΟΕΕ</div>
          <span className="text-700 text-sm line-height-3">
            Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
            tellus.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            {/* <Image
              src="https://upload.wikimedia.org/wikipedia/el/3/30/UNIPI_%28logo%29.png"
              alt="Unipi Icon"
              width="50"
              height="40"
            /> */}

            <i
              src="https://upload.wikimedia.org/wikipedia/el/3/30/UNIPI_%28logo%29.png"
              className="pi pi-github text-4xl text-blue-500"
            ></i>
          </span>
          <div className="text-900 mb-3 font-medium">ΧΑΡΟΚΟΠΕΙΟ</div>
          <span className="text-700 text-sm line-height-3">
            Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat.{" "}
          </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-shield text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">ΚΑΠΟΔΙΣΤΡΙΑΚΟ</div>
          <span className="text-700 text-sm line-height-3">
            Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus
            metus aliquam eleifend.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GalleriaFullScreenDemo;
