import PropTypes from 'prop-types';
import React from 'react';

function Partner({ children, title, image }) {
  const imageAlt = `Logo van ${title}`;
  return (
    <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
      <div className="md:flex-shrink-0">
        <img className="h-12" src={image} alt={imageAlt} />
      </div>
      <div className="mt-6 md:flex md:flex-grow md:flex-col">
        <div className="relative text-lg font-medium text-white md:flex-grow">
          {/* <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg> */}
          <div className="relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

Partner.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Partner;
