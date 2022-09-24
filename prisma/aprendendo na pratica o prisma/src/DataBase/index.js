import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Gabriel:bababa10@cluster0.jjb2p82.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

export default mongoose;
