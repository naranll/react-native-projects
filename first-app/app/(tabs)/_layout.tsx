import {Tabs} from "expo-router";
import {Text} from "react-native";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="cats"
        options={{
          tabBarIcon: () => <Text>🐱</Text>,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="dogs"
        options={{
          tabBarIcon: () => <Text>🐶</Text>,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
