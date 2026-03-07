const mongoose = require("mongoose")
const { Status } = require("../../config/constants")

const BannerSchema = new mongoose.Schema({
 title: {
    type: String,
    min: 2,
    max: 100,
    unique: true
  }, 
  slug: {
    type: String,
    unique: true
  },
  logo: {
     publicId: String,
    secureUrl: String,
    optimizedUrl: String,
  },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.INACTIVE
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null
  },
  updatedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null
  }
 },{
    autoIndex: true,
    autoCreate: true,
    timestamps: true
 }
) 

const BannerModel = mongoose.model("Banner", BannerSchema)

module.exports = BannerModel;

