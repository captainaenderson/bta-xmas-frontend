import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <div className='flex justify-center mt-20'>
    <iframe 
      src="https://open.spotify.com/embed/playlist/2fnFoN85qLk8UgZ91xLArt?utm_source=generator&theme=0" 
      width="300" 
      height="380" 
      frameBorder="0" 
      allowtransparency="true" 
      allow="encrypted-media">
    </iframe>
    </div>
  );
};

export default SpotifyPlaylist;