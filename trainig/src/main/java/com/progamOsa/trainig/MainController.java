package com.progamOsa.trainig;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600) //sem isto da erro de segurança..
@Controller
@RequestMapping(path = "/programosa")
public class MainController {

    @Autowired
    private WorkoutRepository workoutRepository;


    @GetMapping(path = "/workout")
    public @ResponseBody Iterable<Workout> getAllUsers(){
        return workoutRepository.findAll();
    }

    @PutMapping(path = "/add")
    public @ResponseBody String addNewWorkout(@RequestParam String skill, @RequestParam String strength, @RequestParam String wod, @RequestParam String oddObjects ){


        Workout cenas = workoutRepository.findById(x);
        //ver isto.. passar ID quando for a por o treino.. supostamento o resto fica igual... criar um service e um metodo delete... de resto acho que tá

        Workout workout = new Workout();
        workout.setSkill(skill);
        workout.setStrength(strength);
        workout.setWod(wod);
        workout.setOddObjects(oddObjects);

        workoutRepository.save(workout);
        return "Saved";

    }



}
