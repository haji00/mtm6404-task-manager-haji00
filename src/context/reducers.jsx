export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      let new_tasks = [
        ...state.tasks,
        {
          id: Math.floor(Math.random() * 1000),
          text: action.payload,
          duties: [],
        },
      ];

      localStorage.setItem("task", JSON.stringify(new_tasks));

      return {
        ...state,
        tasks: new_tasks,
      };

    case "ADD_DUTY":
      let addDutyTasks = [...state.tasks];

      for (let i = 0; i < addDutyTasks.length; i++) {
        if (addDutyTasks[i].id == action.payload[0].task_id) {
          console.log(action.payload[2]);

          addDutyTasks[i].duties.push({
            id: Math.floor(Math.random() * 1000),
            text: action.payload[1],
            isCompleted: false,
            priority: action.payload[2],
          });

          localStorage.setItem("task", JSON.stringify(addDutyTasks));

          return {
            ...state,
            tasks: addDutyTasks,
          };
        }
      }

    case "DELETE_TASK":
      let renew_tasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );

      localStorage.setItem("task", JSON.stringify(renew_tasks));

      return {
        ...state,
        tasks: renew_tasks,
      };

    case "DELETE_DUTY":
      let dutyRenew_tasks = [...state.tasks];

      for (let i = 0; i < dutyRenew_tasks.length; i++) {
        for (let j = 0; j < dutyRenew_tasks[i].duties.length; j++) {
          if (dutyRenew_tasks[i].duties[j].id == action.payload.id) {
            dutyRenew_tasks[i].duties.splice(j, 1);

            break;
          }
        }
      }

      localStorage.setItem("task", JSON.stringify(dutyRenew_tasks));

      return {
        ...state,
        tasks: dutyRenew_tasks,
      };

    case "TOGGLE_DUTY_STATUS":
      let dutyToggle_Renew_tasks = JSON.parse(JSON.stringify(state.tasks));

      for (let i = 0; i < dutyToggle_Renew_tasks.length; i++) {
        for (let j = 0; j < dutyToggle_Renew_tasks[i].duties.length; j++) {
          if (dutyToggle_Renew_tasks[i].duties[j].id == action.payload.id) {
            if (dutyToggle_Renew_tasks[i].duties[j].isCompleted) {
              dutyToggle_Renew_tasks[i].duties[j].isCompleted = false;

              localStorage.setItem(
                "task",
                JSON.stringify(dutyToggle_Renew_tasks)
              );

              return {
                ...state,
                tasks: dutyToggle_Renew_tasks,
              };
            } else {
              dutyToggle_Renew_tasks[i].duties[j].isCompleted = true;

              localStorage.setItem(
                "task",
                JSON.stringify(dutyToggle_Renew_tasks)
              );

              return {
                ...state,
                tasks: dutyToggle_Renew_tasks,
              };
            }

            break;
          }
        }
      }

    default:
      return state;
  }
};
