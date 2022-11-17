import Room from "../Modules/ChatRoomSchema.js";
// import usersModal from "../Modules/User";
const pushMsg = async (message, room, name, type) => {
  console.log(message, room._id, name);
  // const newUser = userModel.findOne({ walletAddress: name });
  const ChatRoom = await Room.findOneAndUpdate(
    { _id: room._id },
    {
      $push: {
        messages: {
          walletAddress: name,
          message: message,
          type: type,
        },
      },
    }
  );
  // console.log(ChatRoom);
};
export default pushMsg;
