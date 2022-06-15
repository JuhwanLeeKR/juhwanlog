import React from 'react';
import Lottie from 'react-lottie-player';
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../../public/animationLottieFiles.json';

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play />;
}
