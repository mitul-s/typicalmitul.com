const Heading = ({ children }) => (
  <div className="flex items-center my-2 leading-none uppercase gap-x-2">
    <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
    <h2 className="text-dark">{children}</h2>
  </div>
);

export default Heading;
