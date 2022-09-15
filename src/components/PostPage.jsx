import React from 'react';
import RichTextEditor from './RichTextEditor';

const PostPage = () => {
  return (
    <section>
      <div className='post'>
        <form>
          <div className='post-title'>
            <label htmlFor='post-title'>
              Title:
              <input
                type='text'
                name='post-title'
                className='post-title-input'
              />
            </label>
          </div>
          <RichTextEditor />
        </form>
      </div>
    </section>
  );
};

export default PostPage;
