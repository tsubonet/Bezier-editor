import React from 'react'

const Editor: React.FC<{}> = () => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const getWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    getWindowSize();
    () => window.removeEventListener("resize", getWindowSize);
  }, []);
  
  return (
    <>
      <svg 
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <text x="40" y="80">
          <textPath href="#MyPath">
            Hello World
          </textPath>
        </text>
        <path
          id="MyPath"
          fill="none"
          stroke="blue"
          stroke-width="3"
          d="M 28 152 C 28 152 49 78 100 67 C 151 56 210 164 255 148 C 300 133 295 59 295 59"
        />
      </svg>
    </>
  )
};

export default Editor