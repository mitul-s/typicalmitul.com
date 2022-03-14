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


const Contact = () => {
    return (
      <div className="h-screen p-4">
        <div className="flex flex-col justify-between w-full h-full p-4 rounded bg-dark">
          <div>
            <div className="flex items-center mt-2 mb-4 leading-none uppercase gap-x-2">
              <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
              <h2 className="uppercase text-eggshell">Say hello</h2>
            </div>
            <div className="w-full h-px bg-eggshell"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <form className="flex flex-col self-end justify-end w-1/2 w-full h-full py-6 gap-y-6">
              <div className="w-full">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full py-2 transition duration-300 bg-transparent border-b rounded outline-none text-7xl border-dark/25 focus:border-yolk focus"
                  id="email"
                  name="email"
                  placeholder="What's your email?"
                />
              </div>
              <div className="w-full">
                <label className="text-eggshell" htmlFor="email">
                  Email
                </label>
                <textarea
                  rows={4}
                  //   className="w-full py-2 transition duration-300 bg-transparent border-b rounded outline-none text-7xl border-dark/25 focus:border-yolk"
                  className="w-full p-4 text-white transition-all border rounded-sm outline-none focus:shadow-xl focus:shadow-yolk bg-dark border-yolk focus:border-transparent focus:bg-transparent"
                  resize="none"
                  id="email"
                  name="email"
                  placeholder="What's on your mind?"
                />
              </div>
              <button className="w-full py-4 border rounded text-yolk bg-dark border-yolk">
                Submit
              </button>
            </form>
          </div>
          <Marquee />
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


export default Contact;