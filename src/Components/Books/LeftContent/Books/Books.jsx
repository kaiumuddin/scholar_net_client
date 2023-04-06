import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="bg-gray-100 px-6 py-4 pb-10 rounded">
      <div className="mb-6 divide-y-2 divide-gray-200">
        <h1 className="text-xl font-semibold mb-2">Books</h1>
        <div></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 items-center">
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book1.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book2.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book3.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book4.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>

        <div className="col-span-2">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book6.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="col-span-2">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book7.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>

        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book5.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book8.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book9.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
        <div className="">
          <Link className="hover:text-cyan-600">
            <img
              className="rounded-xl hover:bg-cyan-300 p-1"
              src="https://wpkixx.com/html/socimo/images/resources/book10.jpg"
              alt=""
            />
            <h5 className="text-md mt-2 font-bold">Html5</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
