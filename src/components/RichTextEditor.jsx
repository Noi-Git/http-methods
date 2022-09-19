import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import '../App.css';

const RichTextEditor = ({ handleEditorChange, editorState }) => {
  return (
    <div className='rich-text-editor'>
      <header className='post-description'>Description</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
        toolbarClassName='toolbar-class'
      />
    </div>
  );
};

export default RichTextEditor;
