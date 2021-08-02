import PropTypes from 'prop-types'
import './Statistic.css'
    
const Statistics = ({stats, title} ) => {
    
    return (
        <div className="social">
            {title&&<h1>{title}</h1>}         
        <ul className="stat-list">
            {stats.map((stat) => {
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
    stats: PropTypes.array,
}
