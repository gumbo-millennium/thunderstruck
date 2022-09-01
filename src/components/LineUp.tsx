import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-unused-vars
function LineUp ({ children, title, image, embed }) {
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

LineUp.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  embed: PropTypes.string,
}

export default LineUp;
