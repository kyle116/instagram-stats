import React, { Component } from 'react';
// Services
// Components
// Stylesheets
import './IgModal.css';

class IgModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postData: this.props.postData
		}
	    // this.onChange = this.onChange.bind(this);
	    // this.submitUrl = this.submitUrl.bind(this);
	}
	componentDidUpdate(prevProps) {
		// updates when props change
	    if(JSON.stringify(this.props.postData) !== JSON.stringify(prevProps.postData)) {
			this.setState({
				postData: this.props.postData
			})
	    }
	}
	render() {
		return (
		<div id="DIV_1" className="reset-this">
		    <article id="ARTICLE_2">
		        <header id="HEADER_3">
		            <div id="DIV_4">
		                <canvas id="CANVAS_5">
		                </canvas>
		                <a href="/undefeatedinc/" id="A_6"><img src={this.state.postData.profile_pic} alt="undefeatedinc's profile picture" id="IMG_7" /></a>
		            </div>
		            <div id="DIV_8">
		                <div id="DIV_9">
		                    <div id="DIV_10">
		                        <h2 id="H2_11">
		                            <a title={this.state.postData.username} href={this.state.postData.username} id="A_12">{this.state.postData.username}</a>
		                        </h2>
		                        <span id="SPAN_13">Verified</span>
		                    </div>
		                    <div id="DIV_14">
		                        <span id="SPAN_15">•</span>
		                        <button type="button" id="BUTTON_16">
		                        {this.state.postData.followed_by_viewer ? 'Following' : 'Follow'}
		                        </button>
		                    </div>
		                </div>
		                <div id="DIV_17">
		                    <div id="DIV_18">
		                    </div>
		                    <div id="DIV_19">
		                    </div>
		                </div>
		            </div>
		        </header>
		        <div id="DIV_20">
		            <div id="DIV_21">
		                <div id="DIV_22">
		                    <div id="DIV_23">
		                        <img alt="Image may contain: sky, cloud and outdoor" src={this.state.postData.display_url} id="IMG_24" />
		                    </div>
		                    <div id="DIV_25">
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div id="DIV_26">
		            <section id="SECTION_27">
		                <span id="SPAN_28"><button id="BUTTON_29">
		                <span id="SPAN_30" />
		                </button></span><span id="SPAN_31"><button id="BUTTON_32">
		                <span id="SPAN_33" />
		                </button></span><span id="SPAN_34"><button id="BUTTON_35">
		                <span id="SPAN_36" />
		                </button></span><span id="SPAN_37"><button id="BUTTON_38">
		                <span id="SPAN_39" />
		                </button></span>
		            </section>
		            <section id="SECTION_40">
		                <div id="DIV_41">
		                    <div id="DIV_42">
		                        <button type="button" id="BUTTON_43">
		                        <span id="SPAN_44">{this.state.postData.number_of_likes}</span> likes
		                        </button>
		                    </div>
		                </div>
		            </section>
		            <div id="DIV_45">
		                <ul id="UL_46">
		                	{
		                		this.state.postData.comments.map((comment, i) => {
									return (
										<li key={i} id="LI_47">
											<div id="DIV_48">
					                            <div id="DIV_49">
					                                <div id="DIV_50">
					                                    <h3 id="H3_51">
					                                        <a title="comment.node.owner.username" href={`/${comment.node.owner.username}/`} id="A_52">{comment.node.owner.username}</a>
					                                    </h3>
					                                    <span id="SPAN_53">{comment.node.text}</span>
					                                </div>
					                            </div>
					                            <span id="SPAN_54">
					                            <button id="BUTTON_55" disabled><span id="SPAN_56" /></button>
					                            </span>
					                        </div>
										</li>
									)
								})
		                	}
		                    
		                </ul>
		            </div>
		            <div id="DIV_253">
		                <a href="/p/BviQFzihZor/" id="A_254" />
		                <time id="TIME_255">
		                1 day ago
		                </time>
		            </div>
		            <section id="SECTION_256">
		                <div id="DIV_257">
		                    <form method="POST" id="FORM_258">
		                        <textarea placeholder="Add a comment…" id="TEXTAREA_259" defaultValue={"\t\t\t\t\t\t\t"} />
		                    </form>
		                </div>
		            </section>
		        </div>
		        <div id="DIV_260">
		            <button id="BUTTON_261">
		            <span id="SPAN_262" />
		            </button>
		        </div>
		    </article>
		</div>
		)
	}
}

export default IgModal;