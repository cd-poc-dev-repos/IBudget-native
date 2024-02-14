import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    margin: 0,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    color: "#fff",
    padding: 10,
    fontFamily: "Arial",
    textTransform: "capitalize",
    backgroundColor: "#1B98E0",
    fontWeight: "bold",
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
  incomeText: {
    fontSize: 16,
    color: "#247BA0",
    fontFamily: "Arial",
    textTransform: "capitalize",
  },
  amountText: {
    fontSize: 16,
    color: "#06B929",
    fontFamily: "Arial",
  },
  text: {
    fontFamily: "Arial",
    fontSize: 18,
    margin: 20,
    color: "#006494",
  },
});

export default styles;
