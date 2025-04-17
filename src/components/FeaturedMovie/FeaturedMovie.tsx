import React from 'react';
import './FeaturedMovie.css';

function FeaturedMovie() {
  return (
    <div id='featured-movie-component'>

        <div id='featured-movie-text-parent'>
            <div id='featured-movie-text'>
                <h1>THE BRAVE</h1>
                <h1>CHINCHILLA</h1>
                <h3>A brave chinchilla warrior is betrayed by his closest friend while trying to stop an ancient curse. Now scarred and alone, he must decide if he can forgive, or fight the one who hurt him most.</h3>
            </div>
        </div>

        <div id='featured-movie-photo-frame'>
            <div id='featured-movie-photo'>
                <div id='fade-overlay'>

                </div>
            </div>
        </div>
        <div id='lower-fade-overlay'></div>
    </div>
  )
}

export default FeaturedMovie