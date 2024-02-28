const { uploadDB, addChannelDB } = require("../DB/Repository/AdminRepository");
export const upload = async (req: any, res: any) => {
  console.log("upload");
  // res.send("upload")
};



export const addChannel = async (req: any, res: any) => {
  try {
    const channelData = req.body; // Assuming channel data is sent in the request body
    await addChannelDB(channelData);

    res.status(201).json({ message: 'Channel added successfully' });
  } catch (error) {
    console.error("Error in addChannel controller:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};