import React, { Component } from 'react'
import './calendar.css'
import TitleImage from '../../assets/schedule.png'

class Schedule extends Component {

	constructor(props) {
		super(props) 
		this.state = {

		}
	}

	render() {
		return (
			<React.Fragment>
				<div class="d-flex flex-column p-2 custom-div">
					<div class="d-flex flex-row justify-content-center">
						<ul class="list-group time-box">
							<li class="list-group-item text-secondary custom-time border-light">
								8 AM
							</li>
							<li class="list-group-item custom-time border-light">
								9 AM
							</li>
							<li class="list-group-item custom-time border-light">
								10 AM
							</li>
							<li class="list-group-item custom-time border-light">
								11 AM
							</li>
							<li class="list-group-item custom-time border-light">
								12 PM
							</li>
							<li class="list-group-item custom-time border-light">
								1 PM
							</li>
							<li class="list-group-item custom-time border-light">
								2 PM
							</li>
							<li class="list-group-item custom-time border-light">
								3 PM
							</li>
							<li class="list-group-item custom-time border-light">
								4 PM
							</li>
							<li class="list-group-item custom-time border-light">
								5 PM
							</li>
							<li class="list-group-item custom-time border-light">
								6 PM
							</li>
							<li class="list-group-item custom-time border-light">
								7 PM
							</li>
							<li class="list-group-item custom-time border-light">
								8 PM
							</li>
						</ul>
						<ul class="list-group">
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								Learn React
								<span class="badge badge-light badge-pill">Workshop</span>
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								Meeting with Instructor
								<span class="badge badge-warning badge-pill">Meeting</span>
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								Do homework
								<span class="badge badge-primary badge-pill">Study</span>
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
							<li class="list-group-item d-flex justify-content-between align-items-center custom-time border-light">
								-
							</li>
						</ul>
					</div>
				</div>

			</React.Fragment>
		)
	}
}

export default Schedule
