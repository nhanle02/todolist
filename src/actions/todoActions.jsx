export const createBroad = (broadData) => {
    return {
      type: "CREATE_BROAD",
      payload: broadData,
    };
};