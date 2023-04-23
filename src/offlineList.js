const offlineList = [
    { id: 1, text: "Work"       ,    duties: [
          { id: 1, text: "Create low-fidelity wireframes ", priority: "High", isCompleted: true },
          { id: 2, text: "Create mockups", priority: "Medium", isCompleted: true },
          { id: 3, text: "Research target audience", priority: "Medium", isCompleted: true },
          { id: 4, text: "Follow up with client", priority: "Low", isCompleted: true },
          { id: 5, text: "Send pitch deck", priority: "Low", isCompleted: true }
    ]},
    { id: 2, text: "Groceries"  ,    duties: [
          { id: 6, text: "Milk", priority: "High", isCompleted: false },
          { id: 7, text: "Eggs", priority: "Medium", isCompleted: false },
          { id: 8, text: "Banana", priority: "Low", isCompleted: false }
    ]},
    { id: 3, text: "Home"       ,    duties: [
          { id: 9,  text: "Take out trash", priority: "High", isCompleted: false },
          { id: 10, text: "Do dishes", priority: "High", isCompleted: true },
          { id: 11, text: "Vacuum", priority: "Medium", isCompleted: true }
    ]}
];
  
export default offlineList;