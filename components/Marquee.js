export const Marquee2 = () => {
 return (
   <>
     <div className="marquee">
       <div className="marquee__inner" aria-hidden="true">
         {[...Array(15)].map((e, i) => (
           <span key={i}>Available for work</span>
         ))}
       </div>
     </div>
   </>
 );
}
export const Marquee = () => {
 return (
   <>
     <div className="marquee">
       <div className="marquee__inner" aria-hidden="true">
         {[...Array(15)].map((e, i) => (
           <span key={i}>Available for work</span>
         ))}
       </div>
     </div>
   </>
 );
}

export default Marquee;
