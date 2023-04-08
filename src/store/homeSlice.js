import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    recentActivities: [
      {
        title: "VP Quality Control",
        invNo: "Invoice #IN3454",
        dueDate: "Due Sep, 11",
        amount: "₦88,654.88",
        status: "Paid",
        dateCat: "Today",
        image: require("../assets/images/user1.png"),
        id: 1,
      },
      {
        title: "Actuary",
        invNo: "Invoice #IN3454",
        dueDate: "Due Sep, 11",
        amount: "₦11,784.22",
        status: "Paid",
        dateCat: "Yesterday",
        image: require("../assets/images/user1.png"),
        id: 2,
      },
      {
        title: "Environmental Specialist",
        invNo: "Invoice #IN3454",
        dueDate: "Due Sep, 11",
        amount: "₦11,784.22",
        status: "Pending",
        dateCat: "Yesterday",
        id: 3,
      },
    ],
  },
  reducers: {
    SET_RECENT_ACTIVITIES: (state, action) =>
      (state.recentActivities = action.payload),
  },
});

export const { SET_RECENT_ACTIVITIES } = homeSlice.actions;
export default homeSlice.reducer;
