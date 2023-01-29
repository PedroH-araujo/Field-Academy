const mongoose = require('mongoose')

const HomeSchema = nem mongoose.Schema({
   titulo: { type: String, require: true }
})

const HomeModel = mongoose.model()