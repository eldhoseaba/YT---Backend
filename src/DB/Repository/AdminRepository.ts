
import ChannelModel from '../models/Channels';
export const uploadDB = async (data: any) => {
  try {
    // // Create a new document with the provided data
    // const document = new YourModel(data);

    // // Save the document to the database
    // await document.save();

    console.log("Data uploaded to the database:", data);
  } catch (error) {
    console.error("Error uploading data to the database:", error);
    // Handle the error appropriately
  }
};

export const addChannelDB = async (channelData: any) => {
  try {
    const channelDocument = new ChannelModel(channelData);
    await channelDocument.save();

    console.log("Channel added to the database:", channelData);
  } catch (error) {
    console.error("Error adding channel to the database:", error);
    // Handle the error appropriately
  }
};
