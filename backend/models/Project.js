import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title:{type:String,required:true,trim:true},
        description:{type:String,trim:true},
        techStack:[String],
        liveLink:String,
        githubLink:String,
        image:{
            url:String,
            fileId:String,
        },

    },
    {timestamps:true}
);

export default mongoose.model("Project",projectSchema);