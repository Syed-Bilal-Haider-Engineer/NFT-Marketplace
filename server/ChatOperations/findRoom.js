import Room from "../Modules/ChatRoomSchema.js";
import usersModel from "../Modules/User.js";
const findRoom = async (address) => {
  const user = await usersModel.findOne({ walletAddress: address });
  if (!user) return [];
  const rooms = await Room.find({ users: { $in: user._id } }).populate("users");
  return rooms;
};
export default findRoom;
