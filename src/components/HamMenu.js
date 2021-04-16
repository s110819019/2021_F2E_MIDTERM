export default function HamMenu({onClick, isOnTouch}) {
    return (
       <>
          {isOnTouch ? (
             <span onClick={onClick} className="hamMenu show__mobile">
                <span className="hamMenu__bar1 hamMenu__bar1--touch"></span>
                <span className="hamMenu__bar2 hamMenu__bar2--touch"></span>
                <span className="hamMenu__bar3 hamMenu__bar3--touch"></span>
             </span>
          ):(
             <span onClick={onClick} className="hamMenu show__mobile">
                <span className="hamMenu__bar1"></span>
                <span className="hamMenu__bar2"></span>
                <span className="hamMenu__bar3"></span>
             </span>
          )}
       </>
    );
 }