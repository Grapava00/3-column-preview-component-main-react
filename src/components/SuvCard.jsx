import React from "react";
import Icon from "./Icon";
import Title from "./Title";
import Description from "./Description";

function SuvCard() {
  return (
    <div className='bg-darkCyan p-7'>
      <Icon
        svgELement={
          <svg width='64' height='40' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <circle fill='#000' opacity='.201' cx='20' cy='20' r='20' />
              <path
                d='M31.002 22.358c2.917 0 5.18 2.593 4.762 5.506a4.828 4.828 0 01-2.962 3.778 4.797 4.797 0 01-5.3-1.165c-1.188-1.26-1.235-2.613-1.263-2.613-.42-2.924 1.857-5.506 4.763-5.506zm22 0c3.457 0 5.798 3.567 4.41 6.744A4.816 4.816 0 0152.3 31.94a4.826 4.826 0 01-4.06-4.077c-.42-2.915 1.846-5.506 4.762-5.506zm-15.04-6.083v1.462a1.29 1.29 0 001.352 1.29c.693-.033 1.227-.631 1.227-1.326v-1.426h8.3l13.056.716a1.29 1.29 0 011.164.917c.27.895.446 1.477.563 1.87h-1.047c-.694 0-1.291.534-1.324 1.228a1.29 1.29 0 001.288 1.352h1.445c-.164 2.225-1.57 4.193-3.6 5.05.13-4.212-3.255-7.63-7.384-7.63-4.317 0-7.762 3.718-7.358 8.086h-7.285c.43-4.655-3.503-8.531-8.131-8.046v-3.543h7.734zm-10.312 0v4.308a7.4 7.4 0 00-4.006 7.274 3.874 3.874 0 01-3.642-3.864v-1.635h1.46a1.29 1.29 0 000-2.58h-1.461v-3.213l.003-.29h7.646zm14.986-8.196c2.65 0 5 1.592 5.984 4.055l.63 1.579a5.525 5.525 0 01-.065-.004l-.026-.002-.034-.002-.022-.002a4.178 4.178 0 00-.224-.006l-.098-.001h-.039l-.136-.001h-.052l-.326-.001H40.211L38.528 8.08zm-13.632 0l-1.122 5.616h-7.144l1.47-4.71a1.29 1.29 0 011.231-.906h5.565zm6.832 0l1.683 5.615h-7.007l1.121-5.615h4.203z'
                fill='#26B5C0'
                fillRule='nonzero'
              />
            </g>
          </svg>
        }
      />
      <Title title='SUVS' />
      <Description
        text='   Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
   and off-road adventures.'
      />
      <button className='bg-veryLightGray hover:bg-darkCyan hover:text-white border-2  text-darkCyan font-big-shoulders-display  rounded-full py-2 px-4'>
        Learn More
      </button>
    </div>
  );
}

export default SuvCard;
