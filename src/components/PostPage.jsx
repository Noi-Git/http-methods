import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { EditorState } from 'draft-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editorState.getCurrentContent().getPlainText('\u0001'));
    try {
      await axios.post('http://localhost:3000/posts', {
        title: title,
        description: editorState.getCurrentContent().getPlainText('\u0001'),
      });
      console.log('post successful');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className='post'>
        <form onSubmit={handleSubmit}>
          <div className='post-title'>
            <label htmlFor='post-title'>
              Title:
              <input
                type='text'
                name='post-title'
                className='post-title-input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <RichTextEditor
            handleEditorChange={handleEditorChange}
            editorState={editorState}
          />
          <button type='submit' className='save-post'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostPage;
