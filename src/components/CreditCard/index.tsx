import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import {
  Skia,
  Blur,
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Circle,
  Group,
  useFont,
  Text,
  TextPath,
  translate,
  SkMatrix,
} from "@shopify/react-native-skia";

import CairoFont from "../../assets/fonts/Cairo-Regular.ttf";

const width = Dimensions.get("window").width - 24;
const height = 200;

const CreditCard = () => {
  const font = useFont(CairoFont, 16);

  if (font === null) {
    return <ActivityIndicator />;
  }

  const circle = Skia.Path.Make();
  circle.addCircle(60, 60, 30);
  circle.offset(width - 100, height - 100);

  return (
    <Canvas style={{ width, height }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={10}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(256, 256)}
          colors={["#5B9A93", "#2E645F", "#5B9A93"]}
        />
      </RoundedRect>

      <Group blendMode="overlay">
        <Circle cx={width - 60} cy={40} r={20} color="#D6A485" />
        <Circle cx={width - 40} cy={40} r={20} color="#98504B" />
      </Group>

      <Text x={20} y={50} font={font} color="#fff" text="Operadora do cartão" />
      <Text
        x={20}
        y={height - 90}
        font={font}
        color="#fff"
        text="0000 0000 0000 0000"
      />
      <Text x={20} y={height - 30} font={font} color="#fff" text="00/0000" />
      <Text
        x={width - 55}
        y={height - 30}
        font={font}
        color="#fff"
        text="000"
      />

      <TextPath
        text="test test test test test test"
        font={font}
        path={circle}
        color="#000"
        opacity={0.3}
      >
        <Blur blur={1} />
      </TextPath>
    </Canvas>
  );
};

export default CreditCard;
