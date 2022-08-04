import "./DetailsListing.css";
import image from "../../../assets/car-test.jpg";
import posts from '../../../utils/posts'
import {useContext, useState, useEffect} from 'react';
import UserContext from '../../../contexts/UserContext'

export const DetailsListing = ({ history, match }) => {
  const user = useContext(UserContext)

    const [articleData, setArticleData] = useState({
        name: '',
        price: 0,
        year: 0,
        
    });
  //const articleId = match.params.id;

  /*useEffect(() => {
    posts
        .getOne(articleId)
        .then(res => {
            setArticleData(res)
        })
        .catch(err => console.log(err));
}, [articleId]);*/

  return (
    <section className="container">
      <div className="details">
        <h2>Car</h2>
        <img src={image} alt="alt text" />
        <article className="infos">
          <p>
            <b>Year:</b> 2003
          </p>
          <p>
            <b>Price:</b> 226000$
          </p>
          <p>
            <b>Type:</b> Petrol
          </p>
        </article>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          iure eos soluta vitae aliquam quos numquam distinctio quisquam
          deserunt quasi aut ipsum quidem, eligendi voluptas facere nemo culpa
          sequi hic.
        </p>
        <div className="buttons">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        </div>
      </div>
    </section>
  );
};
