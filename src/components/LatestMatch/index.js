// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
    venue,
    result,
  } = latestMatch

  return (
    <div className="latest-match-card-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match-card">
        <div className="latest-match-logo-container">
          <div className="latest-match-details-main">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match-venue">{venue}</p>
            <p className="latest-match-status">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-match-logo"
            alt="latest match {competingTeam}"
          />
        </div>
        <div className="latest-match-details-info">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">{firstInnings}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">{manOfTheMatch}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
