import Room from "../Modules/ChatRoomSchema.js";
// import usersModal from "../Modules/User";
const pushMsg = async (message, room, name) => {
  console.log(message, room._id, name);
  // const newUser = userModel.findOne({ walletAddress: name });
  const ChatRoom = await Room.findOneAndUpdate(
    { _id: room._id },
    {
      $push: {
        messages: {
          walletAddress: name,
          message: message,
        },
      },
    }
  );
  // console.log(ChatRoom);
};
export default pushMsg;
