// In this example, the button toggles a state variable to switch between a playing 
// and a paused state. However, in order to actually play or pause the video, toggling 
// state is not enough. You also need to call play() and pause() on the DOM element 
// for the <video>. Add a ref to it, and make the button work.

// Original:

import { useState, useRef } from 'react';

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <video width="250">
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   )
// }

// Solution:

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playVideo = useRef(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      playVideo.current.play();
    } else if (!nextIsPlaying) {
      playVideo.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video ref={playVideo} width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

// Para resolver el problema definimos un ref y lo iniciamos como falso. Dicho ref va a apuntar al video
// que queremos reproducir: para esto, agregaremos el atributo 'ref={playVideo}' a la etiqueta del video.
// Luego, para conectar el hacer click en el botón de 'Play/Pause' con reproducir y parar el video vamos
// a agregar al event handler un condicional indicando que si 'nextIsPlaying' es igual a 'true' entonces
// 'playVideo.current' (es decir, el nodo correspondiente a nuestro video) llamará el método 'play()',
// mientras que si es 'false' llamará a 'pause()'.