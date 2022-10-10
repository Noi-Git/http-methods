import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RichTextEditor from './RichTextEditor';
import { useParams, useNavigate } from 'react-router-dom';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { EditorState, ContentState } from 'draft-js';

const EditPage = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState(null);
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
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

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get('http://localhost:3000/posts/' + id);
      console.log(data);
      const testCreateMarkup = createMarkup(data.description);
      console.log('++ testCreateMarkup++ ', testCreateMarkup);
      const blocksFromHTML = convertFromHTML(data.description);
      console.log('-- blog from html ---', blocksFromHTML);
      const descriptionState = ContentState.createFromBlockArray(
        // blocksFromHTML.contentBlocks,
        blocksFromHTML.blockMap,
        blocksFromHTML.entityMap
      );
      setEdit(data);
      setEditorState(
        EditorState.createWithContent(
          // ContentState.createFromText(data.description)
          descriptionState
        )
      );
    };
    getDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editorState.getCurrentContent().getPlainText('\u0001'));
    try {
      await axios.put('http://localhost:3000/posts/' + id, {
        title: edit.title,
        description: editorState.getCurrentContent().getPlainText('\u0001'),
      });
      console.log('update edit successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      {edit && (
        <div className='post'>
          <form onSubmit={handleSubmit} data-testid='save-edit-page'>
            <div className='post-title'>
              <label htmlFor='post-title'>
                Title:
                <input
                  type='text'
                  name='post-title'
                  placeholder='input'
                  className='post-title-input'
                  onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                  value={edit.title}
                />
              </label>
            </div>
            <RichTextEditor
              handleEditorChange={handleEditorChange}
              editorState={editorState}
            />
            <button
              // data-testid='save-edit-page'
              type='submit'
              className='save-edit'
            >
              Save
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default EditPage;
