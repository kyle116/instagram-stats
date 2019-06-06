{this.state.postData &&
<ul className="col-sm-4">
	<li>country_code: {this.state.postData.country_code}</li>
	<li>language_code: {this.state.postData.language_code}</li>
	<li>display_url: {this.state.postData.display_url.substring(0, 30)}...</li>
	<li>number_of_comments: {this.state.postData.number_of_comments}</li>
	<li>number_of_likes: {this.state.postData.number_of_likes}</li>
	<li>sponsors: {this.state.postData.sponsors}</li>
</ul>}


<ul className="">
	<li>Account: @{this.state.postData.username}</li>
	<li>Sponsorship Type: {'Branded Content'}</li>
	<li>Platform: {'Instagram'}</li>
	<li>Market Value: {'$22,500'}</li>
	<li>Brand Sponsor Media Value: {'$76,235'}</li>
	<li>Logo Size: {'Medium'}</li>
	<li>Logo Placement: {'Corners'}</li>
	<li>Logo Prominence: {'Overlay'}</li>
	<li>Followers: {this.state.postData.followers}</li>
	<li>Post Impressions: {this.state.postData.number_of_likes}</li>
	<li>Post Engagements: {this.state.postData.number_of_comments}</li>
	<li>Engagement Rate: {'8.1%'}</li>
	<li>Influencer World Rank: {'#888'}</li>
</ul>


{/*<div className="container-fluid">
			<div className="text-center mt-3 mb-3">&nbsp;</div>
			<div className="row">
				<div className="col-sm-8">
					{this.state.postData && <IgModal postData={this.state.postData} />}
					{/* <img className="img-fluid float-right mediaValueImage" src={require('../../igmodal.png')}/> */}
				</div>
				<div className="col-sm-4">
					<div className="container d-flex h-100">
						<div className="row align-self-center">
							<h2>Market Value: $22,500</h2>
							{this.state.postData &&
							<div>
								<div className="med-val-section">
									<span className="med-val-title">Account: </span><span className="med-val-content"><a href={`https://www.instagram.com/${this.state.postData.username}`} target="_blank">@{this.state.postData.username}</a></span>
									<span className="med-val-title">Platform: </span><span className="med-val-content">{'Instagram'}</span>
								</div>
								<div className="med-val-section">
									<span className="med-val-title">Post Impressions: </span><span className="med-val-content">{impressions ? impressions : ''}</span>
									<span className="med-val-title">Post Engagements: </span><span className="med-val-content">{engagements}</span>
								</div>
								<div className="med-val-section">
									<span className="med-val-title">Logo Size: </span><span className="med-val-content">{'Medium'}</span>
									<span className="med-val-title">Logo Placement: </span><span className="med-val-content">{'Corners'}</span>
									<span className="med-val-title">Logo Prominence: </span><span className="med-val-content">{'Overlay'}</span>
								</div>
							</div>
							}
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				
			</div>
		</div>*/}




<div className="container-fluid">
	<div className="text-center mt-3 mb-3">Select Options Below To Determine Ad Value</div>
	<div className="row">
		<div className="col-sm-7">
			
			<div className="container-ad-image">
				<div className="ig-modal-pic">
					<div className="container-ad">
						<div id="ad-overlay" className={this.state.adClasses}></div>
					</div>
					{/* this.state.postData && <IgModal postData={this.state.postData} /> */}
					<img className="img-fluid invisible" src={require('../../igmodal.png')}/>
				</div>
			</div>
		</div>

		<div className="col-sm-5">
			<div className="container d-flex h-100">
				<div className="row align-self-center w-100">
					<div className="container">
						<div className="row">
							<div className="container">
								<div className="row">
							        <div id="branded-content" className="square-radio" onClick={this.toggleSquareClick}>
							            <div className={`${this.state.buttons['branded-content']['active'] ? 'square-radio-clicked' : ''}`}></div>
							        </div>
									<div>Branded Content</div>
								</div>
								{ this.state.buttons['branded-content']['active'] && 
							    <div>
									<div className="row">
										<div className="col-md-3 text-right">Size</div>
										<div className="col-md-3">
											<div className="row">
												<div id="small" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['size']['small'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Small</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="medium" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['size']['medium'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Medium</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="large" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['size']['large']? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Large</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 text-right">Placement</div>
										<div className="col-md-3">
											<div className="row">
												<div id="center" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['placement']['center'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Center</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="corners" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['placement']['corners'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Corners</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="sides" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['placement']['sides'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Sides</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 text-right">Prominence</div>
										<div className="col-md-3">
											<div className="row">
												<div id="overlay" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['prominence']['overlay'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Overlay</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="background" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['prominence']['background'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Background</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="foreground" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'branded-content')}>
										            <div className={`${this.state.buttons['branded-content']['prominence']['foreground'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Foreground</div>
											</div>
										</div>
									</div>
								</div> 											
								}
							</div>
						</div>
						<div className="row">
							<div className="container">
								<div className="row">
							        <div id="product-placement" className="square-radio" onClick={this.toggleSquareClick} onClick={this.toggleSquareClick}>
							            <div className={`${this.state.buttons['product-placement']['active'] ? 'square-radio-clicked' : ''}`}></div>
							        </div>
							    	<div>Product Placement</div>
							    </div>
							    { this.state.buttons['product-placement']['active'] && 
							    <div>
									<div className="row">
										<div className="col-md-3 text-right">Size</div>
										<div className="col-md-3">
											<div className="row">
												<div id="small" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['size']['small'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Small</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="medium" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['size']['medium'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Medium</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="large" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['size']['large']? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Large</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 text-right">Placement</div>
										<div className="col-md-3">
											<div className="row">
												<div id="center" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['placement']['center'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Center</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="corners" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['placement']['corners'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Corners</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="sides" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['placement']['sides'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Sides</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 text-right">Prominence</div>
										<div className="col-md-3">
											<div className="row">
												<div id="overlay" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['prominence']['overlay'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Overlay</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="background" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['prominence']['background'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Background</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="foreground" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'product-placement')}>
										            <div className={`${this.state.buttons['product-placement']['prominence']['foreground'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Foreground</div>
											</div>
										</div>
									</div>
								</div> 											
								}
							</div>
					    </div>
					    {/*<div className="row">
					        <div id="paid-partnership" className="square-radio" onClick={this.toggleSquareClick}>
					            <div className={`${this.state.buttons['branded-content']['active'] ? 'square-radio-clicked' : ''}`}></div>
					        </div>
					    	<div>Paid Partnership</div>
					    </div>*/}
					    <div className="row">
							<div className="container">
							    <div className="row">
							        <div id="instagram-story" className="square-radio" onClick={this.toggleSquareClick}>
							            <div className={`${this.state.buttons['instagram-story']['active'] ? 'square-radio-clicked' : ''}`}></div>
							        </div>
							    	<div>24 Hr Instagram Story</div>
							    </div>
							    { this.state.buttons['instagram-story']['active'] && 
							    <div>
									<div className="row">
										<div className="col-md-3 text-right">Size</div>
										<div className="col-md-3">
											<div className="row">
												<div id="small" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['size']['small'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Small</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="medium" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['size']['medium'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Medium</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="large" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['size']['large']? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Large</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 text-right">Placement</div>
										<div className="col-md-3">
											<div className="row">
												<div id="center" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['placement']['center'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Center</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="corners" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['placement']['corners'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Corners</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="sides" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['placement']['sides'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Sides</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 text-right">Prominence</div>
										<div className="col-md-3">
											<div className="row">
												<div id="overlay" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['prominence']['overlay'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Overlay</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="background" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['prominence']['background'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Background</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="row">
												<div id="foreground" className="square-radio" onClick={(e) => this.toggleSquareClick(e, 'instagram-story')}>
										            <div className={`${this.state.buttons['instagram-story']['prominence']['foreground'] ? 'square-radio-clicked' : ''}`}></div>
										        </div>
												<div>Foreground</div>
											</div>
										</div>
									</div>
								</div>
								}
							</div>
						</div>
				    </div>
			    </div>
		    </div>
	    </div>

	    <div className="container">
		    <div className="row">
			    <div className="col text-center">
		    		<Link to={'/media-value'}>
		    			<button type="button" className="btn btn-success w-25 ad-custom-but">Done</button>
		    		</Link>
			    </div>
		    </div>
	    </div>
	</div>
</div>