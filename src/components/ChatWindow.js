import React, { useState, useEffect, useRef} from "react";
import "./ChatWindow.css";

import MessageItem from "./MessageItem";

import Avatardois from "./../image/Avatardois.png";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import EmojiPicker from "emoji-picker-react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user}) => {

  const body = useRef();

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
    { author: 123, body: "Olá Boa noite!" },
    { author: 123, body: "Tudo bem?" },
    { author: 1234, body: "Como é o seu nome?" },
  ]);

  useEffect(()=>{
    if(body.current.scrollHeight > body.current.offsetHeight) {
        body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list])

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };
  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };

  const handleSendClick = () => {};

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src={Avatardois} alt="" />
          <div className="chatWindow--name">Fabrício</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div ref={body} className="chatWindow--body">
        {list.map((item, key) => (
          <MessageItem 
            key={key} 
            data={item} 
            user={user}
        />
        ))}
      </div>
      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          width="auto"
          height="350px"
          background="none"
          onEmojiClick={handleEmojiClick}
          searchDisabled
          skinTonesDisabled
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          {text === "" && (
            <div onClick={handleMicClick} className="chatWindow--btn">
              <MicIcon style={{ color: listening ? "#126ECE" : "#919191" }} />
            </div>
          )}
          {text !== "" && (
            <div onClick={handleSendClick} className="chatWindow--btn">
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
