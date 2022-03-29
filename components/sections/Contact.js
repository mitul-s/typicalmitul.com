import { useState } from "react";
import Marquee from "../Marquee";

const CopyEmailButton = () => {
    const [text, setText] = useState("Send me a message");
    const [copied, setCopied] = useState(false);
    
    const copyEmail = () => {
        navigator.clipboard.writeText('typicalmitul@gmail.com');
        setCopied(true);
        setText("Copied!");
    };

    const resetText = () => {
        if (copied) {
            setTimeout(() => {
                setText("Copied!"); 
            }, 5000);
        } else {
            setText("Send me a message");
        }
        setCopied(false);
    }

    return (
      <button
        onMouseOver={() => setText("Copy email?")}
        onMouseOut={resetText}
        onClick={copyEmail}
        className="mt-2 text-3xl uppercase"
      >
     {text}
      </button>
    );
}

const Contact3 = () => {

    return (
        <div>
          Contact
        </div>
    );  
}


const Contact = () => {
    return (
      <div className="h-screen p-4">
        <div className="flex flex-col justify-between w-full h-full p-4 rounded-lg">
          <div>
            <div className="flex items-center mt-2 mb-4 leading-none uppercase gap-x-2">
              <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
              <h2 className="uppercase text-dark">Say hello</h2>
            </div>
            <div className="w-full h-px bg-dark"></div>
          </div>
          <div className="flex w-full h-full py-6 gap-x-6">
            <div className="flex flex-col justify-start w-full h-full text-eggshell ">
              <div className="text-5xl">
                Get in touch with <br />a <i>quick</i> email.
              </div>
              
              <div className="flex flex-col items-center justify-center w-full h-full">
                <form className="flex flex-col self-end justify-end w-full h-full gap-y-6">
                  <div className="w-full">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full p-4 text-5xl leading-none transition duration-300 bg-transparent rounded focus:outline-none focus:ring-2 ring-yolk text-eggshell focus:shadow-md focus:shadow-yolk"
                      id="email"
                      name="email"
                      placeholder="What's your email?"
                    />
                    <div className="w-full h-px bg-yolk"></div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="sr-only text-eggshell" htmlFor="email">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      //   className="w-full py-2 transition duration-300 bg-transparent border-b rounded outline-none text-7xl border-dark/25 focus:border-yolk"
                      className="w-full p-4 text-5xl transition duration-300 bg-transparent rounded focus:outline-none focus:ring-2 ring-yolk text-eggshell focus:shadow-md focus:shadow-yolk"
                      resize="none"
                      id="email"
                      name="email"
                      placeholder="What's on your mind?"
                    />
                    <div className="w-full h-px bg-yolk"></div>
                  </div>
                  <button className="py-4 transition-all duration-500 border rounded outline-none focus:shadow-md text-yolk bg-dark border-yolk hover:bg-yolk/25 shadow-yolk focus:bg-yolk/25">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* <Marquee /> */}
        </div>
      </div>
    );
}

const Contact2 = () => {
  return (
    <div>
      <div className="flex items-center mb-auto leading-none uppercase gap-x-2">
        <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
        <h2 className="text-dark">Contact</h2>
      </div>
      {/* <CopyEmailButton /> */}
      <form className="flex flex-col justify-end w-full h-full py-6 gap-y-6">
        <div className="w-full">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full py-2 transition duration-300 bg-transparent border-b rounded outline-none text-7xl border-dark/25 focus:border-yolk"
            id="email"
            name="email"
            placeholder="What's your email?"
          />
        </div>
        <div className="w-full">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <textarea
            rows={4}
            className="w-full py-2 transition duration-300 bg-transparent border-b rounded outline-none text-7xl border-dark/25 focus:border-yolk"
            id="email"
            name="email"
            placeholder="What's on your mind?"
          />
        </div>
        <button className="w-full py-4 border rounded bg-yolk border-dark">
          Submit
        </button>
      </form>
    </div>
  );
};


export default Contact3;