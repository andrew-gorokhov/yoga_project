import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  return (
    <FeatureSection />
  );
}

function FeatureSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <h1 className="text-black text-left text-6xl p-2">Занятия Йогой в Москве</h1>
          <h1 className="text-xl p-2">Студии Йоги с ведущими преподавателями по всей Москве</h1>
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="https://cdn.leonardo.ai/users/f36fe9af-795e-4776-b51d-36394e494749/generations/7f7b588d-8532-4d80-ad2c-4c49ef598af3/Default_yoga_studio_2.jpg?w=512"
          />
        </div>
        <YogaList />
      </div>
    </section>
  );
}

function YogaList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/post/tag/title');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ul className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      {posts.map((post) => (
        <li key={post.id} className="flex flex-col mb-10 lg:items-start items-center">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{post.title}</h2>
            <p className="leading-relaxed text-base">{post.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Main;