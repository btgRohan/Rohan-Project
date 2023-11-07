import React from "react";
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";

function Example() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button
        onPress={onOpen}
        colorScheme="teal" // Change the button color
        size="lg" // Adjust button size
        borderRadius={8} // Add border radius
        _text={{ color: "white" }} // Set text color
      >
        Open Actionsheet
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box
            w="100%"
            h={60}
            px={4}
            justifyContent="center"
            bg="teal.500" // Change the background color
            _dark={{
              bg: "teal.700",
            }}
          >
            <Text
              fontSize="20" // Increase font size
              color="white" // Change text color
              _dark={{
                color: "teal.200",
              }}
            >
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Choose an Action:</Actionsheet.Item>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item
            onPress={onClose} // Close the Actionsheet
            _text={{ color: "teal.500" }} // Set text color
          >
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
