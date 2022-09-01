import React from 'react';

export default function LineUp({ children, title, embed, image }) {
  const imageTitle = `Logo van ${title}`;
  return (
    <li>
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <img className="rounded-lg object-cover shadow-lg" src={image} alt={imageTitle} />
        </div>
        <div className="space-y-1 text-lg font-medium leading-6">
          <h3>{title}</h3>
          <p className="text-indigo-600">Band</p>
        </div>
        <div className="text-lg text-gray-500">
          {children}
        </div>
      </div>
    </li>
  );
}
