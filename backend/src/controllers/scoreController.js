import Score from "../models/scoreModel.js";



export const createScore = async(req,res) => {
    try{
        const newScore = new Score(req.body);
        await newScore.save();
        res.status(200).json({message: "OK"});
    }catch(err){
        res.status(401).json({message: "ERROR"});
    }
};

export const getScore = async(req,res) =>{
    const scoreBoard  = await Score.find().sort({score:-1});
    res.status(200).json({scoreBoard});
};

export const updateScore = async(req,res) =>{
    try{
        const scoreBoard  = await Score.findOne({name:req.body.name});
        if (scoreBoard) {
          let curscore = scoreBoard['score'];
          curscore = Math.max(curscore,req.body['score']);
          scoreBoard['score'] = curscore;
          await scoreBoard.save();
          res.status(200).json({message:"Updated", Data: scoreBoard});
        } 
        else {
          const newScore = new Score(req.body);
          await newScore.save();
          res.status(200).json({message:"Created", Data: newScore});
        }    
    }
    catch(err){
        res.status(401).json({message: "ERROR"});
    }
}