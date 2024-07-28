import React from 'react';

function LoadingPage() {
  return (
    <div className="loading-page">
        <div className="loading-spinner"></div>
        <svg className="loading-logo" viewBox="0 0 400 100">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            AGRA EXPRESS
            </text>
        </svg>
        <p className='loadingp'>Loading your journey...</p>
    </div>
  );
}

export default LoadingPage;
