import { Button, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Get Camera Permissions"
        onPress={() => {
          ImagePicker.getCameraPermissionsAsync()
            .then((data) => {
              console.log("success", data);
              return ImagePicker.requestCameraPermissionsAsync().then(
                (result) => console.log("granted", result)
              );
            })
            .catch((error) => console.log("error", error));
        }}
      />
    </View>
  );
}
