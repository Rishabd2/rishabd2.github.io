import React, { useEffect } from 'react';
import anime from 'animejs';

const IconLoader = () => {
  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: 'alternate',
    });

    anim
      .add({
        targets: '#logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: function(el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#R',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart',
      });
  }, []);

  const svgStyle = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    .fade-in {
      opacity: 0;
      animation: fadeIn 2s forwards;
    }
  `;

  return (
    <div>
      <style>{svgStyle}</style>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>Loader Logo</title>
        <g>
          <text
            id="R"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="currentColor"
            fontSize="40"
            className="fade-in">
            R
          </text>
          <path
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconLoader;
