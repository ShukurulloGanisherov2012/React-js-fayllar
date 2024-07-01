import React, { useState } from 'react';
import './App.css';
import { AiOutlineClose } from "react-icons/ai";

export default function App() {
  const [clickedButtons, setClickedButtons] = useState([]);

  const array = [
    {
      id: 1,
      img: "/photosnap.svg",
      title: "Photosnap",
      new: true,
      featured: true,
      about: "Senior Frontend Developer",
      text: "1d ago  •  Full Time • USA Only",
      buttons: [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Senior" },
        { id: 3, name: "HTML" },
        { id: 4, name: "CSS" },
        { id: 5, name: "JavaScript" }
      ]
    },
    {
      id: 2,
      img: "/manage.svg",
      title: "Manage",
      new: true,
      featured: true,
      about: "FullStack Developer",
      text: "1d ago  •  Part Time • Remote",
      buttons: [
        { id: 1, name: "FullStack" },
        { id: 2, name: "Midweight" },
        { id: 3, name: "Python" },
        { id: 4, name: "React" }
      ]
    },
    {
      id: 3,
      img: "/account.svg",
      title: "Account",
      new: true,
      featured: false,
      about: "Junior Frontend Developer",
      text: "2d ago  •  Part Time • USA Only",
      buttons: [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Junior" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "React" },
        { id: 5, name: "Sass" }
      ]
    },
    {
      id: 4,
      img: "/myhome.svg",
      title: "MyHome",
      new: false,
      featured: false,
      about: "Junior Frontend Developer",
      text: "5d ago  • Contract • USA Only",
      buttons: [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Junior" },
        { id: 3, name: "CSS" },
        { id: 4, name: "Javascript" }
      ]
    },
    {
      id: 5,
      img: "/loop-studios.svg",
      title: "Loop Studios",
      new: false,
      featured: false,
      about: "Software Engineer",
      text: "1w ago  • Full time • Worldwide",
      buttons: [
        { id: 1, name: "FullStack" },
        { id: 2, name: "Midweight" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "Ruby" },
        { id: 5, name: "Sass" }
      ]
    },
    {
      id: 6,
      img: "/faceit.svg",
      title: "FaceIt",
      new: false,
      featured: false,
      about: "Junior Backend Developer",
      text: "2w ago  •  Full Time • UK Only",
      buttons: [
        { id: 1, name: "Backend" },
        { id: 2, name: "Junior" },
        { id: 3, name: "Ruby" },
        { id: 4, name: "RoR" }
      ]
    },
    {
      id: 7,
      img: "/shortly.svg",
      title: "Shortly",
      new: false,
      featured: false,
      about: "Junior Developer",
      text: "2w ago  •  Full Time • Worldwide",
      buttons: [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Junior" },
        { id: 3, name: "HTML" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "Sass" }
      ]
    },
    {
      id: 8,
      img: "/insure.svg",
      title: "Insure",
      new: false,
      featured: false,
      about: "Junior Frontend Developer",
      text: "2w ago  •  Full Time • USA Only",
      buttons: [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Junior" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "Vue" },
        { id: 5, name: "Sass" }
      ]
    },
    {
      id: 9,
      img: "/eyecam-co.svg",
      title: "Eyecam Co.",
      new: false,
      featured: false,
      about: "Full Stack Engineer",
      text: "3w ago  •  Full Time • Worldwide",
      buttons: [
        { id: 1, name: "FullStack" },
        { id: 2, name: "Midweight" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "Python" }
      ]
    },
    {
      id: 10,
      img: "/the-air-filter-company.svg",
      title: "The Air Filter Company",
      new: false,
      featured: false,
      about: "Front-end Dev",
      text: "1mo ago  •  Part Time • Worldwide",
      buttons: [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Junior" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "React" },
        { id: 5, name: "Sass" }
      ]
    }
  ];

  const handleButtonDelete = () => {
    setClickedButtons([]);
  };

  const handleButtonClick = (buttonName) => {
    if (!clickedButtons.includes(buttonName)) {
      setClickedButtons([...clickedButtons, buttonName]);
    }
  };

  const handleDelete = (buttonName) => {
    const newBtns = clickedButtons.filter((btn) => btn !== buttonName);
    setClickedButtons(newBtns);
  };

  const filteredArray = array.filter(item =>
    clickedButtons.every(button => item.buttons.some(btn => btn.name === button))
  );

  return (
    <>
      <img className='img' src="/bg.svg" alt="" />
      {clickedButtons.length > 0 && (
        <div className="clickedBtnsWrapper">
          <div className="closeBtn btn btn-outline-danger px-4" onClick={handleButtonDelete}>Clear</div>
          <div className="clickedButtons">
            {clickedButtons.map(button => (
              <div className="clickedButton" key={button}>
                {button}
                <button className='btn btn-danger d-flex justify-content-center align-items-center' onClick={() => handleDelete(button)}><AiOutlineClose /></button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="cardsWrapper">
        {filteredArray.map(item => (
          <div className={`card ${item.new && item.featured ? 'border-left' : ''} flex-wrap`} key={item.id}>
            <div className='cardimgtxt d-flex align-items-center gap-2'>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="text">
                <div className="row1">
                  <div className="d-flex  gap-1">
                    <h4 className='h-100 d-flex align-items-center'>{item.title}</h4>
                    {item.new && <div className="new">NEW!</div>}
                    {item.featured && <div className="featured">FEATURED</div>}
                  </div>
                </div>
                <div className="row2">
                  <h4>{item.about}</h4>
                </div>
                <div className="row3">
                  <h4>{item.text}</h4>
                </div>
              </div>
            </div>
            <div className="btns">
              {item.buttons.map(button => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.name)}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}