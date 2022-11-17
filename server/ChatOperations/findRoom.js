import Room from "../Modules/ChatRoomSchema.js";
import usersModel from "../Modules/User.js";
const findRoom = async (address) => {
  try {
    const user = await usersModel.findOne({ walletAddress: address });
    console.log(user);
    if (!user) return [];
    const rooms = await Room.find({ users: { $in: user._id } }).populate(
      "users"
    );
    return rooms;
  } catch (error) {
    console.log(error);
  }
};
export default findRoom;
