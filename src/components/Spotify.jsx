import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <div className='flex justify-center mt-10 mb-20'>
    <iframe 
      src="https://open.spotify.com/embed/playlist/0HD2BV0zC6r3iBtvmfC1E0?utm_source=generator" 
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