import React, { Component } from 'react';

export default class FooterComponent extends Component {
  	render() {
	    return (
			<div className="footer">
				<footer className="site-footer"> 
					<div className="container"> 
						<div className="row"> 
							<div className="col-md-1"></div>
							<div className="col-md-10"> 
								<ul className="list-links"> 
									<li><a href="">Search Members</a></li> 
									<li><a href="">Register New Member</a></li> 
									<li><a href="">Search Mentor</a></li> 
									<li><a href="">Register New Mentor</a></li>
									<li><a href="">Check Management</a></li>
									<li><a href="">About BBTTC</a></li> 
								</ul> 
							</div>
							<div className="col-md-1"></div>
						</div>
					</div>
					<p className="small-text"> 
						All rights reserved © BBTTC 2019
					</p> 
				</footer>
			</div>
	    );
  	}
}