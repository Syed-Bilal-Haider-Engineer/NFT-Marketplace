import Room from "../Modules/ChatRoomSchema.js";
import usersModel from "../Modules/User.js";
const CreateRoom = async (user1, user2) => {
  const FirstUser = await usersModel.findOne({ walletAddress: user1 });
  const SecondUser = await usersModel.findOne({ walletAddress: user2 });
  console.log(FirstUser, SecondUser, "Users..................");
  if (!FirstUser && !SecondUser) return {};
  const findRoom1 = await Room.findOne({
    users: [FirstUser._id, SecondUser._id],
  });
  if (findRoom1) return findRoom1;
  const findRoom2 = await Room.findOne({
    users: [SecondUser._id, FirstUser._id],
  });

  if (findRoom2) return findRoom2;

  const room = new Room({});
  room.users.push(FirstUser._id, SecondUser._id);

  room.save(function (err) {
    if (err) return console.log(err);
  });

  if (!findRoom1 && !findRoom2) return room;
};

export default CreateRoom;
