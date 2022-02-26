let baseClasses = "flex justify-between w-full px-4 py-4 font-medium text-left uppercase rounded bg-yolk";

export const ButtonLink = ({ href, children }) => {
    return ( 
        <a href={href} className={baseClasses}>
            {children}
        </a>
    )
}


export const Button = ({ children }) => {
  return (
    <button className={baseClasses}>
      {children}
    </button>
  );
};

