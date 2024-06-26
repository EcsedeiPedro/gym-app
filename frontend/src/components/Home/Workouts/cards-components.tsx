type WorkoutCardsProps = {
  children: React.ReactNode
  className?: string;
};

type WorkoutCardProps = {
  children: React.ReactNode
  className?: string;
  key: number;
  style: any;
};

type WorkoutCardNameProps = { 
  children: React.ReactNode;
  className?: string;
};

type WorkoutCardButtonProps = {
  children: React.ReactNode;
  onClick?: any;
  className?: string;
};

const WorkoutCards = ({ children, className }: WorkoutCardsProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
};

const WorkoutCard = ({ children, className, key, style }: WorkoutCardProps) => {
  return (
    <div className={className} key={key} style={style}>
      {children}
    </div>
  )
};

const WorkoutCardName = ({ children, className, }: WorkoutCardNameProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
};

const WorkoutCardButton = ({ children, className, onClick }: WorkoutCardButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
};

export { WorkoutCards, WorkoutCard, WorkoutCardName, WorkoutCardButton }