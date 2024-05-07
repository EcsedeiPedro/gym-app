import { TrainingCards } from "./Workouts/TrainingCard";

export function TrainingSuggestions() { 
  return (
    <section className="bg-less-dark-gray py-[80px]">
      <div className="container">
        <h2 className="title-font">Sugestões de Treinos</h2>

        <TrainingCards />
      </div>
    </section>
  )
}