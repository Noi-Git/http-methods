import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RichTextEditor from './RichTextEditor';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get('http://localhost:3000/posts/' + id);
      console.log(data);
      setEdit(data);
    };
    getDetails();
  }, []);

  return (
    <section>
      {edit && (
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
      )}
    </section>
  );
};

export default EditPage;
