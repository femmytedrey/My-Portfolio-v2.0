export const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500";
    case "in-progress":
      return "bg-yellow-500";
    case "coming-soon":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "coming-soon":
      return "Coming Soon";
    default:
      return "Unknown";
  }
};
