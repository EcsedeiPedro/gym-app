import { TrainingCards } from "./Workouts/TrainingCard";

export function TrainingSuggestions() { 
  return (
    <section className="bg-white py-[80px]">
      <div className="container">
        <h2 className="title-font !text-dark-gray">Sugestões de Treinos</h2>

        <TrainingCards />
      </div>
    </section>
  )
}