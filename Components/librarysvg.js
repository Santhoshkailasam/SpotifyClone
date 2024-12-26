import React from "react";
import Svg, { G, Path, Rect,ClipPath,Defs } from "react-native-svg";

const Librarysvg = ({ width = 24, height = 24, fill = "black" }) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<G  ClipPath="url(#clip0_102_1469)">
<Path d="M12.6179 0.907262L21.4498 20.7421L20.4251 21.2005L11.5931 1.36572L12.6179 0.907262ZM0.549805 21.187V0.799377H1.68249V21.187H0.549805ZM7.34569 21.187V0.799377H8.47837V21.187H7.34569Z" fill={fill}/>
</G>
<Defs>
<ClipPath id="clip0_102_1469">
<Rect width="22" height="22" fill="white"/>
</ClipPath>
</Defs>
</Svg>
);

export default Librarysvg;
