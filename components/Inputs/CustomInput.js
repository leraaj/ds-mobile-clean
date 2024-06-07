import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import useToggle from "../../hooks/useToggle";
import { icons, COLORS, FONT, SIZES, SHADOWS } from "../../constant/Index";

const CustomInput = ({
  title,
  placeholder,
  isPassword,
  onChangeText,
  isLight,
  disabled,
  value,
  isDownload,
}) => {
  const { toggle, toggler } = useToggle();

  // Define border and label color based on isLight prop
  const borderColor = isLight ? COLORS.gray2 : COLORS.black;
  const labelColor = isLight ? COLORS.gray2 : COLORS.black;

  return (
    <View style={[!isDownload && styles.formContainer, { width: "auto" }]}>
      <Text style={[styles.label, { color: labelColor }]}>
        {title || "Enter Label"}
      </Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <TextInput
          placeholder={placeholder || ""}
          autoCapitalize="none"
          autoComplete="off"
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.gray2}
          {...(value && { value: value })}
          {...(disabled && { editable: false })}
          {...(isPassword && { secureTextEntry: !toggle ? true : false })}
          style={[
            styles.inputContainer,
            { borderBottomColor: borderColor, color: labelColor },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={toggler}
            style={{
              position: "absolute",
              right: 0,
              paddingHorizontal: 13,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                toggle
                  ? isLight
                    ? icons.viewLightPassword
                    : icons.viewPassword
                  : isLight
                  ? icons.hideLightPassword
                  : icons.hidePassword
              }
              style={SIZES.insetIconSmall}
              resizeMode="conver"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: { minWidth: "100%", marginBottom: 20 },
  label: {
    fontSize: 12.5,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FONT.poppinsMedium,
  },
  inputContainer: {
    fontFamily: FONT.poppins,
    height: 40,
    fontSize: SIZES.medium,
    paddingStart: 10,
    paddingEnd: 40,
    borderBottomWidth: 1.5,
    flex: 1, // Ensure it takes the available space within formContainer
  },
});

export default CustomInput;
