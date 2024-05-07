'use client'

import { API } from "@/constants"
import { useEffect, useState } from "react";
import axios from "axios";
import { WorkoutCard, WorkoutCardButton, WorkoutCardName, WorkoutCards } from "./cards-components";

type WorkoutCardPicture = {
  data: {
    attributes: {
      url: string;
    }
  }
}

type WorkoutAttributes = {
  name: string;
  card_picture: WorkoutCardPicture
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
            className="relative h-[336px] bg-no-repeat bg-center bg-cover w-[267px] flex flex-col justify-center items-center shadow-2xl rounded-md"
            style={{
              backgroundImage: `url(${API + attributes.card_picture.data.attributes.url})`
            }}
          >
            <WorkoutCardName className="text-white uppercase text-xl p-2 bg-dark-gray bg-opacity-20">{attributes.name}</WorkoutCardName>

            <WorkoutCardButton className="absolute -bottom-2 w-full bg-dark-gray p-2 text-center text-white uppercase">
              Saiba mais
            </WorkoutCardButton>
          </WorkoutCard>
      ))}
    </WorkoutCards>
  )
}