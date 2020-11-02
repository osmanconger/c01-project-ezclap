import React, { Component } from 'react'
import './calendar.css'
import Card from 'react-bootstrap/Card'
import Refresh from '../../assets/externalSync.png'
import AddEvent from '../../assets/addEvent.png'

class SmallCards extends Component {

	render() {
		return (
			<div class="d-flex flex-column">
				<div class="card-deck pt-4 pl-0">
					<a href="#" class="card custom-card pl-0 custom-a">
						<img class="rounded mx-auto d-block pl-3 pt-2" src={AddEvent}/>
						<p class="card-text custom-p mx-auto p-2 align-text">Add/Join <br />an Event</p>
					</a>
					<a href="#" class="card custom-card custom-a">
						<img class="rounded mx-auto d-block pt-3" src={Refresh}/>
						<p class="card-text custom-p mx-auto p-2 align-text-top">Sync with External</p>
					</a>
				</div>
				<div class="card d-flex flex-columns mt-4 custom-card">
					<div>
						<p class="card-text custom-p p-2">Legend</p>
					</div>
					<div>
						
					</div>
				</div>
			</div>
		)
	}
}

export default SmallCards
