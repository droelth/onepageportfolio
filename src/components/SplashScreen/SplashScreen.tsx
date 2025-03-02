import { useState, useEffect } from "react";
import Styles from "./SplashScreenStyles.module.scss"; // Add CSS styles
import splashVideo from "../../assets/moon.mp4"; // Import your video file

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish(); // Callback to notify App.tsx
    }, 2500);

    return () => clearTimeout(timer); // Cleanup function
  }, [onFinish]);

  if (!visible) return null; // Hide when done

  return (
    <div className={Styles.splashScreen}>
      <video autoPlay muted playsInline className={Styles.video}>
        <source src={splashVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
