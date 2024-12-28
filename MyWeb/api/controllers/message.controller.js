import Message from "../models/message.model.js";


export const create_messsage = async (req, res) => {
  const data = new Message(req.body)
  await data.save()
  res.send({ success: true, message: "message send successfuly" })
}

