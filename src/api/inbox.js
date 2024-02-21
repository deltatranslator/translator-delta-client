import axiosSecure from ".";

// get single inbox
export const getInbox = async (id) => {
  const { data } = await axiosSecure(`/inboxDetails/${id}`);
  return data;
};
