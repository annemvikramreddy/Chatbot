import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);


  return (
    <div className='main'>
      <div className="nav">
        <p>Chat-bot</p>
        <img src={assets.icon} alt="" />
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
            <div className='result-title'>
              <img src={assets.icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.chatbot_logo} alt="" />
              {loading
                ? <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>

          </div>
          : <>
            <div className="greet">
              <p><span>Hello, Explorers.</span></p>
              <p>let us explore how curious we are?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => onSent("Suggest me a diet control plan with vegetables")}>
                <p>Suggest me a diet control plan with vegetables</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("give me an approach to get job in this recession")}>
                <p>give me an approach to get job in this recession</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("how does neuroplasticity occur in brain")}>
                <p>How does neuroplasticity occur in brain</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("why do lot of people work for financial freedom, is that most important")}>
                <p>why do lot of people work for financial freedom, is that most important</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Chatbot may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
