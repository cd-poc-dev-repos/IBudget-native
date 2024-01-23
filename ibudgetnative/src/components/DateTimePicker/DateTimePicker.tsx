import * as React from "react";
import moment from "moment";
import { Overlay } from 'react-native-elements';
import DatePicker from "@react-native-community/datetimepicker";
import { Platform, Text, View, TouchableOpacity } from 'react-native';
import * as Type from './DateTimePicker.type';
import Style from './DateTimePicker.style';

const DateTimePicker = ({ placeholder }: Type.IDateTimePicker) => {
  const [date, setDate] = React.useState<Date>();
  const [show, setShow] = React.useState<boolean>(false);
  const [dateString, setDateString] = React.useState<string>();

  const onChange = (event: any, selectedDate: any) => {
    setDate(selectedDate);
    setDateString(moment(selectedDate).format("YYYY-MM-DD"));
  };

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <View style={{ flex: 1, borderRadius: 100 }}>
      <TouchableOpacity
        onPress={showOverlay}
        style={Style.inputContainerStyle}
      >
        {dateString ? (
          <Text style={Style.textStyle}>{dateString}</Text>
        ) : (
          <Text style={Style.placeholderStyle}>{placeholder}</Text>
        )}
      </TouchableOpacity>
      {Platform.OS === "ios" ? (
        <Overlay
          isVisible={show}
          onBackdropPress={hideOverlay}
          overlayStyle={Style.overlayStyle}
        >
          <View style={Style.headerStyle}>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={{ paddingHorizontal: 15 }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={{ paddingHorizontal: 15, color: "green" }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            value={date ?? new Date()}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{ backgroundColor: "white" }}
          />
        </Overlay>
      ) : (
        <>
          {show && (
            <DatePicker
              value={date ?? new Date()}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{ backgroundColor: "white" }}
            />
          )}
        </>
      )}
    </View>
  );
};

export default DateTimePicker;
