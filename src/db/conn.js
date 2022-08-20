const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/MonthlyPlanningGroceryApi",{useNewUrlParser : true,useUnifiedTopology : true})
.then(()=> console.log("mongoo is connected"))
.catch(()=> console.log("mongo error"))