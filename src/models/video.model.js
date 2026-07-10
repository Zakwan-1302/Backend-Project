import mongoose , {Schema} from "mangoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 

const videoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        duration: {
            type: Number, //cloudinary url
            required: true,
        },
        Views: {
            type: Number,
            default: 0,
        },
       IsPublished: {
            type: Boolean,
            default: True,
        },

        thumbnail: {
            type: String, //cloudinary url
            required: true,
        },
        videoFile: {
            type: String, //cloudinary url
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export const Video = mongoose.model("Video", videoSchema);