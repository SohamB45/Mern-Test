const express=require('express')
const{createWorkout,getWorkout,getWorkouts, updateWorkout, deleteWorkout}=require('../controllers/workoutController')
const router=express.Router()

//get all workouts
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//update the workout
router.patch('/:id',updateWorkout)

//delete single workout
router.delete('/:id',deleteWorkout)


module.exports=router;