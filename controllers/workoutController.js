const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')




//get all workouts
const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})//finding all entries from Workout model and sorting in descending order


    res.status(200).json(workouts)
}


//get a single workout
const getWorkout=async(req,res)=>{
    const{ id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'workout(id is not valid) does not exist'})  
    }

    const workout =await Workout.findById(id)

    if(!workout){
       return  res.status(404).json({error:"id doesn't exist"})
    }

    res.status(200).json(workout)
}
//create new Workout
const createWorkout=async (req,res)=>{
    const {title,load,reps,description}=req.body

    //add doc to db
    try{
        const workout= await Workout.create({title,load,reps,description})
        res.status(200).json(workout)

    } catch(error){
        res.status(400).json({error:error.message})

    }
}

//delete a workout
const deleteWorkout=async(req,res)=>{
    const{ id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'workout(id is not valid) does not exist'})  
    }

    const workout =await Workout.findOneAndDelete({_id:id})

    if(!workout){
       return  res.status(400).json({error:"id doesn't exist"})
    }

    res.status(200).json(workout)

}

//update a workout
const updateWorkout=async(req,res)=>{
    const{ id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'workout(id is not valid) does not exist'})  
    }

    const workout =await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
       return  res.status(400).json({error:"id doesn't exist"})
    }

    res.status(200).json(workout)

}





module.exports={createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}