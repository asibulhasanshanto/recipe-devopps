import React, { useEffect } from "react";
import Ingradiants from "../components/Ingradients/Ingradiants";
import Layout from "../components/layouts/Layout";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const imageUrl = "https://picsum.photos/900/500";
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        setImage(URL.createObjectURL(blob));
      });
  }, []);
  return (
    <Layout>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        className="float-right m-3 px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-cyan-950 "
      >
        Go Back
      </button>

      <div className="flex w-full text-start ">
        <div className="border-b rounded-md border-gray-200 bg-white w-full py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Recipe
          </h3>
          <p className="mt-1 mb-3 text-sm text-gray-500">sweet</p>
          <hr />
          {/* create an image from the image */}
          <img className="pb-3" src={image} alt="recepie image" />

          {/* description */}
          <h2 className="font-bold mb-3">Description</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptates, quia, voluptas quae voluptatem quibusdam
            voluptatum quos quas dolorum quia. Quisquam quod, voluptates, quia,
            voluptas quae voluptatem quibusdam voluptatum quos quas dolorum
            quia.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam quod, voluptates, quia, voluptas quae voluptatem quibusdam
            voluptatum quos quas dolorum quia. Quisquam quod, voluptates, quia,
            voluptas quae voluptatem quibusdam voluptatum quos quas dolorum
            quia.
          </p>

          {/* ingredients */}
          <h2 className="font-bold my-3">Ingredients</h2>
          <Ingradiants />
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
