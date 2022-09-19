import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const DetailPage = ({}) => {
  const { id } = useParams();
  console.log('--- params ---', id);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const delet = await axios.delete('http://localhost:3000/posts/' + id);
      console.log('post deleted');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get('http://localhost:3000/posts/' + id);
      console.log(data);
      setPost(data);
    };
    getDetails();
  }, []);

  return (
    <section>
      {post && (
        <article className='blog-details'>
          <h1 className='blog-title'> {post.id} </h1>
          <h1 className='blog-title'> {post.title} </h1>
          {/* <p className='blog-description'> {post.description} </p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: post.description,
            }}
          />
          <Link to={`/edit/${id}`}>
            <button className='edit-button'>Edit Your Post</button>
          </Link>
          <button className='delete-post' onClick={handleDelete}>
            Delete
          </button>
        </article>
      )}
    </section>
  );
};

export default DetailPage;
