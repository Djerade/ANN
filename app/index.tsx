import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// importer  'react-native-reanimated'
import { useState, useEffect } from "react";
import SplashScreen from "./screens/splash";
import Home from "./screens/home";
import React from "react";
import Result from "./screens/result";
import Camera from "@/components/camera";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);
  return <Camera />;
  // return <>{isLoading ? <SplashScreen /> : <Home />}</>;
}
