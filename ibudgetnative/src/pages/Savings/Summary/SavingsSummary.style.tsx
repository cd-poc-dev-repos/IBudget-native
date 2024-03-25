import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    margin: 0,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B98E0",
    elevation: 3
  },
  text: {
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  listItem: {
    padding: 20,
    borderWidth: 1,
    display: "flex",
    borderRadius: 10,
    flexDirection: "row",
    borderColor: "#000000",
    backgroundColor: "#E8F1F2",
    justifyContent: "space-between",
  },
  SavingsText: {
    fontSize: 16,
    color: "#247BA0",
    fontFamily: "Arial",
    textTransform: "capitalize",
  },
  amountText: {
    fontSize: 16,
    color: "#06B929",
    fontFamily: "Arial",
  }
});

export default styles;
