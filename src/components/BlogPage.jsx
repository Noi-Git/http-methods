import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = ({ id, title, description }) => {
  // console.log('- description.indexOf --', description.indexOf('</p>'));

  const descriptionIndexOf = description.indexOf('</p>');
  console.log(
    '- description.slice --',
    description.slice(0, descriptionIndexOf + 4)
  );

  return (
    <article className='blog'>
      <h1 className='blog-title'> {title} </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: description.slice(0, descriptionIndexOf + 4),
        }}
      />
      {/* <p className='blog-description'>
        {description.split(' ').splice(0, 60).join(' ')}
      </p> */}
      <Link to={`/detail/${id}`} className='read-more'>
        Read more...
      </Link>
    </article>
  );
};

export default BlogPage;
