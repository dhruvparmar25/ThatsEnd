import React, { useRef } from 'react'
import '../../App.css'

function ScrollImg() {
    const listRef = useRef(null);
    const scrollToIndex = (index) => {
        const listNode = listRef.current;

        const imageNode = listNode.querySelectorAll('li>img')[index];
        imageNode.scrollToIndex({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }
    return (
        <div>
            <div>
                <ul className='imageList' style={{display:"flex"}} ref={listRef}> 
                    <li><img
              /></li>
            <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
            />
          </li>
                </ul>
            </div>
            <nav>
                <button onClick={()=>scrollToIndex(0)}>Neo</button>
                <button onClick={()=>scrollToIndex(1)}>Millie</button>
                <button onClick={()=>scrollToIndex(2)}>Bella</button>
            </nav>
        </div>
    )
}

export default ScrollImg