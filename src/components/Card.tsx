import React from 'react';
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string;
  date: string;
  author: string;
  authorLink: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    image,
    link,
    tags,
    date,
    author,
    authorLink,
  }) => {
    return (
      <div className="rounded-xl border p-4 shadow-md bg-white max-w-sm">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold mb-2">
          <a href={link} className="hover:underline text-blue-600" target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="text-sm text-gray-500 mb-2">{new Date(date).toLocaleDateString()}</div>
        {/* <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
              #{tag}
            </span>
          ))}
        </div> */}
        <a href={authorLink} className="text-sm text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          By {author}
        </a>
      </div>
    );
  };

  export default Card;