import '../assets/comp-position-list.css'

type PositionListProps = {
  data: Array<Position>
}

export default function PositionList({ data }: PositionListProps) {
  return (
    <ol className='position-list'>
      {data.map(pos => {
        const startDate = new Date(pos.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        const endDate = pos.endDate 
          ? new Date(pos.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
          : 'Present';

        const compPos = (
          <>
            <h3>{pos.title} <span>@</span> <span className='company'>{pos.company}</span></h3>
            <div className='start-end-date'>
              <time dateTime={pos.startDate}>{startDate}</time> -{' '}
              {pos.endDate ? <time dateTime={pos.endDate}>{endDate}</time> : 'Present'}
            </div>
            <p>{pos.description}</p>
          </>
        );

        if (pos.url) {
          return <li key={pos.id}><a href={pos.url} target='_blank'>{compPos}</a></li>;
        }
        return <li>{compPos}</li>;

      })}
    </ol>
  );
}