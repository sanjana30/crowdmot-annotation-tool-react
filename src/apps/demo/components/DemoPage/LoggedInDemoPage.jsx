import React, { Component } from 'react';
import { TwoDimensionalVideo } from 'apps/index'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Logo from './images/ut-logo-resized.png';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Instructions from "./videoInstruction"
import { CSVLink, CSVDownload } from "react-csv";
import { array } from 'prop-types';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class LoggedInDemoPage extends Component {
	styles = {
		color: '#ffffff',
		backgroundColor: `#bf5700`,
		border: `1px solid #bf5700`,
		
	}
	lowerButtonCol1Style={
		alignItems: `right`
	}
	lowerButton1Style = {
		color: '#ffffff',
		backgroundColor: `#bf5700`,
		border: `1px solid #bf5700`,
		alignSelf: `right`,
		alignItems: `flex-end`,
		textAlign: `right`, 
		flex: `right`, marginLeft: `auto`, marginRight: 0
	}
	lowerButton2Style = {
		color: '#ffffff',
		backgroundColor: `#bf5700`,
		border: `1px solid #bf5700`,
		alignSelf: `left`,
		textAlign: `left`
	}
	constructor(props) {
		super(props)
		const defaultAnnotations = [{
			id: 'jt192wyd',
			name: 'jt192wyd',
			label: '1-2',
			color: 'rgba(255,0,0,1)',
			incidents: [{
				id: 'jt192wyb', name: 'jt192wyb', x: 295.00402335586875, y: 193.3689649661968, width: 40.75402335586878, height: 41.63103503380317, time: 0.0308226495726496, status: 'Show',
			}, {
				id: 'jt1930nb', name: 'jt1930nb', x: 304.00402335586875, y: 202.3689649661968, width: 58.75402335586875, height: 60.63103503380319, time: 0.03178472222222222, status: 'Show',
			}, {
				id: 'jt193fim', name: 'jt193fim', x: 309.00402335586875, y: 213.3689649661968, width: 58.75402335586875, height: 60.63103503380319, time: 0.06388611111111112, status: 'Show',
			}, {
				id: 'jt193ijo', name: 'jt193ijo', x: 320.00402335586875, y: 220.3689649661968, width: 58.75402335586875, height: 74.63103503380319, time: 0.08677242063492063, status: 'Show',
			}, {
				id: 'jt19484m', name: 'jt19484m', x: 320.48992156587633, y: 218.42537212616642, width: 60.697616195899116, height: 78.17334040378043, time: 0.0966718253968254, status: 'Show',
			}, {
				id: 'jt193o4y', name: 'jt193o4y', x: 321.00402335586875, y: 216.3689649661968, width: 62.75402335586875, height: 71.63103503380319, time: 0.10714583333333334, status: 'Show',
			}, {
				id: 'jt194dom', name: 'jt194dom', x: 321.00402335586875, y: 218.8083044640243, width: 62.75402335586875, height: 69.1916955359757, time: 0.1195857142857143, status: 'Show',
			}, {
				id: 'jt193taw', name: 'jt193taw', x: 321.00402335586875, y: 228.3689649661968, width: 62.75402335586875, height: 59.63103503380319, time: 0.13459007936507936, status: 'Show',
			}, {
				id: 'jt193zb4', name: 'jt193zb4', x: 318.00402335586875, y: 228.3689649661968, width: 81.75402335586875, height: 59.63103503380319, time: 0.1693952380952381, status: 'Show',
			}, {
				id: 'jt195ltz', name: 'jt195ltz', x: 328.2874098641244, y: 230.6523514744525, width: 70.85164231813906, height: 56.631035033803215, time: 0.1985523622047244, status: 'Show',
			}, {
				id: 'jt194trg', name: 'jt194trg', x: 322.00402335586875, y: 232.3689649661968, width: 76.66967862975952, height: 59.63103503380319, time: 0.22047222222222224, status: 'Show',
			}, {
				id: 'jt194lgm', name: 'jt194lgm', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 59.63103503380319, time: 0.22967083333333332, status: 'Show',
			}, {
				id: 'jt195p7m', name: 'jt195p7m', x: 318.00402335586875, y: 228.3689649661968, width: 68.75402335586875, height: 58.19684946385905, time: 0.25359350393700786, status: 'Show',
			}, {
				id: 'jt1951r9', name: 'jt1951r9', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 54.63103503380319, time: 0.31307242063492063, status: 'Show',
			}, {
				id: 'jt195v9l', name: 'jt195v9l', x: 318.00402335586875, y: 228.3689649661968, width: 75.75402335586875, height: 54.63103503380319, time: 0.34623937007874017, status: 'Hide',
			}],
			childrenNames: [],
			parentName: 'jt1922xu',
		}, {
			id: 'jt192wyc',
			name: 'jt192wyc',
			label: '1-1',
			color: 'rgba(255,0,0,1)',
			incidents: [{
				id: 'jt192wyb', name: 'jt192wyb', x: 274.25, y: 171.73792993239366, width: 40.75402335586878, height: 41.63103503380317, time: 0.0308226495726496, status: 'Show',
			}, {
				id: 'jt19349x', name: 'jt19349x', x: 271.25, y: 167.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.03178472222222222, status: 'Show',
			}, {
				id: 'jt193ekd', name: 'jt193ekd', x: 274.25, y: 160.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.06388611111111112, status: 'Show',
			}, {
				id: 'jt193hp1', name: 'jt193hp1', x: 280.25, y: 160.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.08677242063492063, status: 'Show',
			}, {
				id: 'jt194cbv', name: 'jt194cbv', x: 280.1326975821677, y: 158.62062751456136, width: 60.75402335586875, height: 58.63103503380316, time: 0.1195857142857143, status: 'Show',
			}, {
				id: 'jt193umg', name: 'jt193umg', x: 274.25, y: 154.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.13459007936507936, status: 'Show',
			}, {
				id: 'jt193y7q', name: 'jt193y7q', x: 268.25, y: 155.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.1693952380952381, status: 'Show',
			}, {
				id: 'jt194hxg', name: 'jt194hxg', x: 260.25, y: 157.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.20233392857142857, status: 'Show',
			}, {
				id: 'jt194mj1', name: 'jt194mj1', x: 253.25, y: 156.73792993239366, width: 60.75402335586875, height: 58.63103503380316, time: 0.22967083333333332, status: 'Show',
			}, {
				id: 'jt195qgw', name: 'jt195qgw', x: 246.25, y: 156.73792993239366, width: 63.66047805713703, height: 58.63103503380316, time: 0.25359350393700786, status: 'Show',
			}, {
				id: 'jt194xqh', name: 'jt194xqh', x: 253.25, y: 156.73792993239366, width: 52.75402335586875, height: 58.63103503380316, time: 0.27642281746031744, status: 'Show',
			}, {
				id: 'jt1955u1', name: 'jt1955u1', x: 265.25, y: 159.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.3564833333333333, status: 'Show',
			}, {
				id: 'jt195b3i', name: 'jt195b3i', x: 265.25, y: 141.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.45984980158730154, status: 'Show',
			}, {
				id: 'jt1961v6', name: 'jt1961v6', x: 269.25, y: 144.73792993239366, width: 40.75402335586875, height: 49.63103503380316, time: 0.47851751968503936, status: 'Show',
			}, {
				id: 'jt1965az', name: 'jt1965az', x: 262.25, y: 144.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.5342496062992126, status: 'Show',
			}, {
				id: 'jt1968nk', name: 'jt1968nk', x: 262.25, y: 149.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.5904106299212598, status: 'Show',
			}, {
				id: 'jt196ax3', name: 'jt196ax3', x: 270.25, y: 158.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.6662596456692913, status: 'Show',
			}, {
				id: 'jt196dys', name: 'jt196dys', x: 268.25, y: 164.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.7368370078740157, status: 'Show',
			}, {
				id: 'jt196guu', name: 'jt196guu', x: 272.25, y: 154.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.801053937007874, status: 'Show',
			}, {
				id: 'jt196k7h', name: 'jt196k7h', x: 273.25, y: 157.73792993239366, width: 47.75402335586875, height: 49.63103503380316, time: 0.8626350393700787, status: 'Show',
			}],
			childrenNames: [],
			parentName: 'jt1922xu',
		}, {
			id: 'jt1922xu',
			name: 'jt1922xu',
			label: '1',
			color: 'rgba(255,219,0,1)',
			incidents: [{
				id: 'jt1922xu', name: 'jt1922xu', x: 274.25, y: 174, width: 80, height: 81, time: 0, status: 'Show',
			}, {
				id: 'jt192wyb', name: 'jt192wyb', x: 274.25, y: 171.73792993239366, width: 81.50804671173756, height: 83.26207006760634, time: 0.0308226495726496, status: 'Split',
			}],
			childrenNames: ['jt192wyc', 'jt192wyd'],
			parentName: '',
		}];
		const url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
		const videoWidth = 500;
		const previewNoticeList = [
			'Cells\' body range.',
			'The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>show up</u> (if applicable).',
		];
		const previewHeader = 'Please scan the video and observe the following to help you complete the task:';
		const emptyCheckSubmissionWarningText = 'Please annotate AND track one unmarked cell to complete this task.';
		const emptyCheckAnnotationItemWarningText = 'Step 2: Please track the cell bound by this box';
		const emptyAnnotationReminderText = 'Step 1: Click the button above to add a new box around a cell';

		this.fileInput = React.createRef();
		this.state = {
			result: null,
			input: {
				defaultAnnotations: JSON.stringify(defaultAnnotations),
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			},
			params: {
				defaultAnnotations: [],
				url,
				videoWidth,
				previewHeader,
				previewNoticeList,
				emptyCheckSubmissionWarningText,
				emptyCheckAnnotationItemWarningText,
				emptyAnnotationReminderText,
			}
		}
	}

	handleResultSubmit = result => {
		this.setState({ result: result });
	}

	handleChange = event => {
		const target = event.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState((preState) => {
			const { input } = preState;
			return {
				input: { ...input, [name]: value }
			}

		})
	}

	// getInterpolatedData = event => {
	// 	event.preventDefault();

	// 	const timeNow = (new Date()).getTime().toString(36);
	// 	let interpolatedResult = JSON.parse(JSON.stringify(this.state.result));

	// 	for (let i = 0; i < interpolatedResult.annotations.length; i++) {
	// 		let annotIncidentLength = interpolatedResult.annotations[i].incidents.length
	// 		if (annotIncidentLength === 1) {
	// 			console.log("This is not possible :P")
	// 		}
	// 		else if (annotIncidentLength > 1) {
	// 			for (let j = 0; j < annotIncidentLength - 1; j++) {
	// 				const interpoArea1 = getInterpolatedData({
	// 					startIncident: interpolatedResult.annotations[i].incidents[j],
	// 					endIncident: interpolatedResult.annotations[i].incidents[j + 1],
	// 					currentTime: interpolatedResult.annotations[i].incidents[j + 1].time,
	// 					type: INTERPOLATION_TYPE.LENGTH,
	// 				});
	// 				const interpoPos1 = getInterpolatedData({
	// 					startIncident: interpolatedResult.annotations[i].incidents[j],
	// 					endIncident: interpolatedResult.annotations[i].incidents[j + 1],
	// 					currentTime: interpolatedResult.annotations[i].incidents[j + 1].time,
	// 					type: INTERPOLATION_TYPE.POSITION,
	// 				});
	// 				interpolatedResult.annotations[i].incidents.splice(j + 1, 0, ({
	// 					id: `${timeNow}`, name: `${timeNow}`, x: interpoPos1.x, y: interpoPos1.y, height: interpoArea1.height, width: interpoArea1.width, time: interpolatedResult.annotations[i].incidents[j + 1].time, status,
	// 				}));

	// 			}
	// 			let newAnnotLength = interpolatedResult.annotations[i].incidents.length
	// 			let finalIncident = interpolatedResult.annotations[i].incidents[annotIncidentLength-1]
	// 			const interpoArea = getInterpolatedData({
	// 				startIncident: interpolatedResult.annotations[i].incidents[annotIncidentLength-2],
	// 				endIncident: finalIncident,
	// 				currentTime: 1,
	// 				type: INTERPOLATION_TYPE.LENGTH,
	// 			});
	// 			const interpoPos = getInterpolatedData({
	// 				startIncident: interpolatedResult.annotations[i].incidents[annotIncidentLength-2],
	// 				endIncident: finalIncident,
	// 				currentTime: 1,
	// 				type: INTERPOLATION_TYPE.POSITION,
	// 			});
	// 			console.log("length= "+annotIncidentLength)
	// 			interpolatedResult.annotations[i].incidents.splice(newAnnotLength, 0, ({
	// 				id: `${timeNow}`, name: `${timeNow}`, x: interpoPos.x, y: interpoPos.y, height: interpoArea.height, width: interpoArea.width, time:1, status,
	// 			}));
	// 		}

	// 	}
	// 	this.setState({ interpolationResult: interpolatedResult });
	// 	document.getElementById("export-interpol").style.display = "block";
	// }


	handleSubmit = async event => {
		event.preventDefault();
		let result = {};
		if (this.fileInput.current.files[0]) {
			const readFilePromise = new Promise((resolve, reject) => {
				const fileReader = new FileReader();
				fileReader.onload = event => {
					if (!this.isJsonString(event.target.result))
						reject('Wrong json format');

					let result = JSON.parse(event.target.result);
					resolve(result)
				}
				fileReader.onerror = event => {
					reject(event);
				}
				fileReader.readAsText(this.fileInput.current.files[0]);
			})
			result = await readFilePromise;
		}

		let { url = '', videoWidth = 0, defaultAnnotations = [] } = result;

		this.setState((preState) => {
			const { input } = preState;
			if (annotations.length === 0) {
				defaultAnnotations = this.isJsonString(input.defaultAnnotations) ? JSON.parse(input.defaultAnnotations) : [];
			}
			else {
				defaultAnnotations = result.annotations;
			}
			return {
				params: {
					defaultAnnotations,
					url: url || input.url,
					videoWidth: (videoWidth !== 0 ? videoWidth : parseInt(input.videoWidth, 10))
				}
			};
		}
		);
	}

	isJsonString = str => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	createTable = e => {
		console.log("createTable function");
		console.log(this.state.interpolationResult);
		let temp = JSON.parse(JSON.stringify(this.state.interpolationResult));
		console.log("Temp= \n" + temp);
		console.log("--------------------------")

		// var table = document.createElement('table');
		var table = document.getElementById("interpol-table");
		// var table = document.getElementById("interpol-table").appendChild(table);

		for (var i = 0; i < temp.annotations.length; i++) {
			for (var j = 0; j < temp.annotations[i].incidents.length; j++) {
				var row = document.createElement('tr');
				var cell_id = document.createElement('td');
				cell_id.innerHTML = temp.annotations[i].incidents[j].id
				row.appendChild(cell_id);
				var cell_x_min = document.createElement('td');
				var cell_y_min = document.createElement('td');
				var cell_width = document.createElement('td');
				var cell_height = document.createElement('td');
				var cell_frame = document.createElement('td');
				var cell_lost = document.createElement('td');
				var cell_occluded = document.createElement('td');
				var cell_generated = document.createElement('td');
				var cell_label = document.createElement('td');
				var cell_attributes = document.createElement('td');
				cell_x_min.innerHTML = temp.annotations[i].incidents[j].x;
				cell_y_min.innerHTML = temp.annotations[i].incidents[j].y;
				cell_width.innerHTML = temp.annotations[i].incidents[j].width;
				cell_height.innerHTML = temp.annotations[i].incidents[j].height;
				cell_frame.innerHTML = temp.annotations[i].incidents[j].time;
				cell_lost.innerHTML = 0;
				cell_occluded.innerHTML = 0;
				cell_generated.innerHTML = 0;
				cell_label.innerHTML = temp.annotations[i].label;
				row.appendChild(cell_id);
				row.appendChild(cell_x_min);
				row.appendChild(cell_y_min);
				row.appendChild(cell_width);
				row.appendChild(cell_height);
				row.appendChild(cell_frame);
				row.appendChild(cell_lost);
				row.appendChild(cell_occluded);
				row.appendChild(cell_generated);
				row.appendChild(cell_label);
				row.appendChild(cell_attributes);
				table.appendChild(row);
			}
		}
		this.downloadInterpolTable();
	}
	export_table_to_csv = (html, filename) => {
		var csv = [];
		var rows = document.querySelectorAll("table tr");

		for (var i = 0; i < rows.length; i++) {
			var row = [], cols = rows[i].querySelectorAll("td, th");

			for (var j = 0; j < cols.length; j++)
				row.push(cols[j].innerText);

			csv.push(row.join(","));
		}

		// Download CSV
		this.download_csv(csv.join("\n"), filename);
	}

	download_csv = (csv, filename) => {
		var csvFile;
		var downloadLink;

		// CSV FILE
		csvFile = new Blob([csv], { type: "text/csv" });

		// Download link
		downloadLink = document.createElement("a");

		// File name
		downloadLink.download = filename;

		// We have to create a link to the file
		downloadLink.href = window.URL.createObjectURL(csvFile);

		// Make sure that the link is not displayed
		downloadLink.style.display = "none";

		// Add the link to your DOM
		document.body.appendChild(downloadLink);

		// Lanzamos
		downloadLink.click();
	}

	downloadInterpolTable = () => {
		var html = document.querySelector("table").outerHTML;
		this.export_table_to_csv(html, "table.csv");
	}

	render() {
		const { result, input, params } = this.state
		return (
			<div>
				<div className="nav-wrapper">
				<img src={Logo} alt="UT Austin Logo" className="image-logo"></img>
				<Link to="/logout" className="last-nav-link">Log Out</Link>
				<a href="#" className="nav-link">Profile</a>
				<a href="#" className="nav-link">Help</a>
				<a href="#" className="nav-link">About</a>
				</div>
				<Container className="py-3">
					<h1 className="display-4  text-center">CrowdMOT: A Video Annotation Tool</h1>
					<Row className="my-3 col-xs-12 col-lg-10 offset-lg-1">
						<Col>
							<Instructions />
						</Col>
					</Row>

					<Form className="mb-2 col-xs-12 col-lg-10 offset-lg-1" onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label for="URL">Video Source URL</Label>
							<Input type="text" name="url" placeholder="http://..." value={input.url} onChange={this.handleChange} />
						</FormGroup>
						<FormGroup>
							<Label for="Annotation Width">Video Width</Label>
							<Input type="text" name="videoWidth" placeholder="number" value={input.videoWidth} onChange={this.handleChange} />
						</FormGroup>
						{/* <FormGroup>
							<Label for="exampleText">Default Annotations</Label>
							<Input type="textarea" name="defaultAnnotations" placeholder="[{id: .., name: .., label: .., color: .., incidents: ..}, ..]" value={input.annotations} onChange={this.handleChange} rows={10} />
						</FormGroup> */}
						<FormGroup>
							<Label for="exampleFile" className="pr-2">Upload Default Annotations</Label><br></br>
							<input type="file" name="file" id="exampleFile" ref={this.fileInput} />
						</FormGroup>
						<Row className="my-3 col-xs-12 col-lg-10 offset-lg-6">
							<Col>
								<Button style={this.styles}>Submit</Button>
							</Col>
						</Row>
					</Form>
					<Row className="py-3" style={{ background: "rgb(246, 246, 246)" }}>
						<Col>
							<TwoDimensionalVideo
								key={
									`${JSON.stringify(params.url)}
								 ${JSON.stringify(params.defaultAnnotations)}
								 ${JSON.stringify(params.videoWidth)}
								 ${JSON.stringify(params.previewHeader)}
								 ${JSON.stringify(params.previewNoticeList)}`
								}
								onSubmit={this.handleResultSubmit}
								url={params.url}
								defaultAnnotations={params.defaultAnnotations}
								videoWidth={params.videoWidth}
								previewHeader={params.previewHeader}
								previewNoticeList={params.previewNoticeList}
								hasReview
								isEmptyCheckEnable
								isSplitEnable
								isShowHideEnable
								numAnnotationsToBeAdded={20}
								emptyCheckSubmissionWarningText={params.emptyCheckSubmissionWarningText}
								emptyCheckAnnotationItemWarningText={params.emptyCheckAnnotationItemWarningText}
								emptyAnnotationReminderText={params.emptyAnnotationReminderText}
							/>
						</Col>
					</Row>
					{/* <Row className="my-3 col-xs-12">
						<Col>
							<Card>
								<CardBody>
									<CardTitle>Output</CardTitle>
									<CardText>{JSON.stringify(result, null, 2)}</CardText>
								</CardBody>
							</Card>
						</Col>
					</Row> */}
					<Row className="my-3 col-xs-12">
						
						<Col>
							<Button style={this.lowerButton2Style}><CSVLink data={JSON.stringify(result, null, 2)} style={{ color: 'white' }}>Download Raw Data</CSVLink></Button>
						</Col>
						{/* <Col style={this.lowerButtonCol1Style}>
							<Button color="secondary" style={this.lowerButton1Style} onClick={this.getInterpolatedData}>Generate Interpolated Data</Button>
						</Col>
						<Col>
							<Button id="export-interpol" style={{
								display: 'none', color: '#ffffff',
								backgroundColor: `#bf5700`,
								border: `1px solid #bf5700`,
							}} onClick={this.createTable}>Download Interpolated Data</Button>

						</Col> */}
					</Row>
					{/* <Row className="my-3 col-xs-12">
						<Col>
							<Card>
								<CardBody>
									<CardTitle>Interpolated Data</CardTitle>
									
									<CardText>{JSON.stringify(this.state.interpolationResult, null, 2)}</CardText>
								</CardBody>
							</Card>
						</Col>
					</Row> */}
					{/* <Row className="my-3 col-xs-12">
						<Col>
							<Button id="export-interpol" style={{ display: 'none' }} onClick={this.createTable}>Download Interpolated Data</Button>
						</Col>
					</Row> */}

					<Row className="my-3 col-xs-12">
						<Col>
							<table id="interpol-table" style={{ display: 'none' }}>
								<tr>
									<th >Track ID</th>
									<th>x-min</th>
									<th>y-min</th>
									<th>width</th>
									<th>height</th>
									<th>Frame</th>
									<th>Lost</th>
									<th>Occluded</th>
									<th>Generated</th>
									<th>Label</th>
									<th>Attributes</th>
								</tr>
							</table>
							{/* <button onClick={this.downloadInterpolTable} >Export HTML table to CSV file</button> */}
						</Col>
					</Row>


				</Container>
			</div>
		);
	}
}
export default LoggedInDemoPage;





