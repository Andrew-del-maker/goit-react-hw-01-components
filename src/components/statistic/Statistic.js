import PropTypes from 'prop-types'
import './Statistic.css'
    
const Statistics = (props ) => {
    
    return (
    <div className="social">
        <h2 >{props.title}</h2>
        <ul className="stat-list">
            {props.stats.map((stat) => {
                return <li key={stat.id} className="item">
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                </li>;
                
            })
            }
        </ul>
    </div>
    )
}
export default Statistics;
Statistics.propTypes = {
    stats: PropTypes.bool,
}
