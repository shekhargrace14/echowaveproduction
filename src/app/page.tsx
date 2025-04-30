"use client";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

interface Solution {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[]; // ← Fixed: should be string[]
  date: string;
  author: string;
  authorLink: string;
}

export default function Home() {
  const [data, setData] = useState<Solution[]>([]);

  useEffect(() => {
    fetch("/solutionsData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="w-7xl m-auto">
      <Hero/>
    <main className="my-4 grid gap-4 md:grid-cols-5">
      {data.map((solution, index) => (
        <Card
        key={index}
        title={solution.title}
        description={solution.description}
        image={solution.image}
        link={solution.link}
        tags={solution.tags}
        date={solution.date}
        author={solution.author}
        authorLink={solution.authorLink}
        />
      ))}
    </main>
      </div>
  );
}
