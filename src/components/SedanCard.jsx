import React from "react";
import Icon from "./Icon";
import Title from "./Title";
import Description from "./Description";

function SedanCard() {
  return (
    <>
      <Icon
        svgELement={
          <svg width='64' height='40' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <circle fill='#000' opacity='.201' cx='20' cy='20' r='20' />
              <path
                d='M52.936 24.11c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm-21.957 0c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm6.948-4.848v1.429c0 .716.61 1.293 1.348 1.259a1.295 1.295 0 001.225-1.295v-1.393h8.256l13.483 1.313c.956.093 1.676.881 1.676 1.814 0 2.89-2.126 5.303-4.926 5.819.397-3.557-2.458-6.62-6.053-6.62-3.646 0-6.504 3.14-6.039 6.723h-9.879c.466-3.588-2.397-6.722-6.039-6.722-3.595 0-6.45 3.062-6.052 6.62-2.14-.398-3.916-1.912-4.61-3.931h1.142c.731 0 1.32-.598 1.285-1.322-.033-.678-.629-1.2-1.322-1.2H20v-.251c0-1.274 1.066-2.243 2.306-2.243h15.62zM42.59 11c2.645 0 4.99 1.556 5.972 3.963l.726 1.779H40.17L38.413 11h4.178zm-6.865 0l1.758 5.741H26.505l3.357-3.654A6.502 6.502 0 0134.644 11h1.082z'
                fill='#FFD473'
                fillRule='nonzero'
              />
            </g>
          </svg>
        }
      />
      <Title title='SEDANS' />
      <Description
        text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
or on your next road trip.'
      />
      <button>Learn More</button>
    </>
  );
}

export default SedanCard;
