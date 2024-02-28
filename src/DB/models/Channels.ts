// channels.ts
import { Document, model, Schema } from 'mongoose';

export interface Channel extends Document {
  channelId: string;
  channelName: string;
  commission: string;
  email: string;
}

const channelSchema = new Schema({
  channelId: { type: String, required: true, unique: true },
  channelName: { type: String, required: true },
  commission: { type: String, required: true },
  email: { type: String, required: true },
});

const ChannelModel = model<Channel>('Channel', channelSchema);

export default ChannelModel;
