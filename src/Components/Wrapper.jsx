import React, { useState, useEffect } from "react"; 
import LinkList from "./LinkList";
import ShortenForm from "./ShortenForm";
import StatsSection from "./StatSection";

const Wrapper = () => {
  const [links, setLinks] = useState(() => {
    const saved = localStorage.getItem("shortenedLinks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);

  const addNewLink = (newLink) => {
    setLinks(prev => [newLink, ...prev]);
  };

  return ( 
    <section className="bg-gray-100 p-2 mt-32 md:mt-24">
      <ShortenForm onShorten={addNewLink} />
      <LinkList links={links} />
      <StatsSection />
    </section>
  );
};

export default Wrapper;
