'use client'

import { API } from "@/constants"
import { useEffect, useState } from "react";
import axios from "axios";
import { WorkoutCard, WorkoutCardButton, WorkoutCardName, WorkoutCards } from "./cards-components";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@radix-ui/themes";

type WorkoutExercise = {
  name: string;
  sets: number;
  repetitions: number;
  duration: string;
}

type WorkoutAttributes = {
  name: string;
  card_picture: {
    data: {
      attributes: {
        url: string;
      }
    }
  }
  exercises: WorkoutExercise[] | null | string;
}

type WorkoutCard = {
  id: number;
  attributes: WorkoutAttributes;
}

export function TrainingCards() {
  const apiUrl = `${API}/api/workouts/?populate=card_picture`
  const [workoutCard, setWorkoutCard] = useState<WorkoutCard[]>([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(({ data }) => setWorkoutCard(data.data))
  }, [])  

  return (
    <WorkoutCards className="flex gap-5 py-[80px]">
      {workoutCard.map(({ id, attributes }) => (
          <WorkoutCard 
            key={id} 
            className="relative h-[436px] w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center shadow-2xl rounded-md"
            style={{
              backgroundImage: `url(${API + attributes.card_picture.data.attributes.url})`
            }}
          >
            <WorkoutCardName className="text-white uppercase text-xl p-2 bg-dark-gray bg-opacity-20">{attributes.name}</WorkoutCardName>
              <WorkoutCardButton className="absolute -bottom-2 w-full bg-dark-gray p-2 text-center duration-300 text-white hover:bg-purple">
              <Dialog.Root>
                <Dialog.Trigger className="uppercase w-full h-full">
                  Saiba mais
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed z-[2000] top-0 left-0 bottom-0 right-0 bg-dark-gray bg-opacity-30">
                    <Dialog.Content className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-dark-gray w-[50%] h-max p-10 rounded-md">
                      <Dialog.Close className="cursor-pointer w-full flex justify-end">
                        <X color="#8F00FF" />
                      </Dialog.Close>

                      <Dialog.Title className="title-font mb-4">{attributes.name}</Dialog.Title>

                      <h3 className="text-white text-2xl uppercase py-4">Exercícios:</h3>
                      
                      {Array.isArray(attributes.exercises) && (
                        <ul className="flex flex-col gap-2 py-4">
                          {attributes.exercises.map((exercise, index) => (
                            <li className="text-white" key={index}>
                              {exercise.name} - Séries: {exercise.sets} - {exercise.repetitions ? 'Repetições: ' + exercise.repetitions : 'Duração: ' + exercise.duration}
                            </li>
                          ))}
                        </ul>
                      )}

                      <Button className="bg-purple py-2 px-4 duration-300 rounded-md uppercase tex-sm text-white font-bold hover:bg-white hover:!text-purple">Salvar Treino</Button>
                    </Dialog.Content> 
                  </Dialog.Overlay>
                </Dialog.Portal>
              </Dialog.Root>
            </WorkoutCardButton>
          </WorkoutCard>
      ))}
    </WorkoutCards>
  )
}