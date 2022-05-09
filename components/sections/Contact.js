import { useState } from "react";
import { Text } from "@components";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const CopyEmailButton = () => {
  const [text, setText] = useState("Send me a message");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("typicalmitul@gmail.com");
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
  };

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
};

const Field = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-sm font-medium uppercase">{label}</label>
      {children}
    </div>
  );
};

const Contact = () => {
  const [value, copy] = useCopyToClipboard();

  return (
    <>
      <div className="" style={{ height: "85vh" }}>
        <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          <div className="flex flex-col p-4 mt-4 gap-y-6">
            <div className="flex items-center leading-none uppercase gap-x-2">
              <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
              <h2>Contact</h2>
            </div>
            <Text>
              Well, the way they make shows is, they make one show. That
              show&apos;s called a pilot. Then they show that show to the people
              who make shows, and on the strength of that one show they decide
              if they&apos;re going to make more shows.
            </Text>
          </div>
          <div className="pl-4 md:pl-0 md:place-self-center">
            <div className="text-sm uppercase text-dark/50">
              {value ? "Copied!" : "Click to copy ⬎"}
            </div>
            <button
              className="text-3xl rounded p-1.5 w-fit bg-yolk transition duration-250 hover:bg-yolk/50"
              onClick={() => copy("hey@typicalmitul.com")}
            >
              hey@typicalmitul.com
            </button>
          </div>
          <div className="flex flex-col justify-end col-span-1 p-4 md:pl-4 md:border-l">
            <form className="grid w-full grid-flow-row gap-4 ">
              <Field label="Email Address">
                <input
                  className="px-2 py-2 transition border rounded text-md bg-eggshell focus:bg-white focus-state placeholder:text-dark/50"
                  placeholder="What's your email address?"
                />
              </Field>
              <Field label="Message">
                <textarea
                  className="px-2 py-2 transition border rounded text-md bg-eggshell focus:bg-white focus-state placeholder:text-dark/50"
                  placeholder="What's your message?"
                  rows={4}
                />
              </Field>
              <button className="p-1.5 rounded bg-yolk text-dark text-xl">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
