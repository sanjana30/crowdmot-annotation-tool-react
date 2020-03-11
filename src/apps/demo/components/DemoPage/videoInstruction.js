import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ButtonGroup, Button, Collapse } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import ReactPlayer from 'react-player'

import { MdAdd, MdCallSplit, MdDelete, MdRedo, MdUndo, MdArrowForward } from "react-icons/md";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
//import './videoInstruction.css';


class Instructions extends Component {

	styles = {
		color: '#ffffff',
		backgroundColor: `#bf5700`,
		border: `1px solid #bf5700`,
		width: `100%`
	}

	constructor(props) {
		super(props)
		this.state = { collapse: false };
	}

	toggle = () => {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		return (
			<div>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							<CardTitle><b>Motivation</b></CardTitle>
							<CardText className="mb-5">
								The result of this task will empower researchers to track cells in different life cycle phases and contribute towards treating and preventing diseases, leading to new bio-inspired technology, and answering
								basic science questions about fundamental biological processes.
							</CardText>
							<CardTitle><b>Task</b></CardTitle>
							<CardText className="mb-3">Your task is to <b> annotate the video by drawing bounding boxes around each biological cell and tracking the cells precisely</b> (as shown in the video). You will adjust the boxes at different intervals of the video, and the tool will automatically fill the gaps in the video. You may, however, have to correct any imperfections in the annotations autocompleted by the tool to ensure that the gaps are correctly annotated.  </CardText>
							<div className="mb-5 d-flex align-items-center">
								<figure className="figure">
									<ReactPlayer url='https://youtu.be/dnqS7uOWcOU' height={'140'} width={'100%'} playing loop muted />
									<figcaption className="figure-caption">Before</figcaption>
								</figure>
								<MdArrowForward style={{ margin: "0px 10px 30px 10px" }} />
								<figure className="figure">
									<ReactPlayer url='https://youtu.be/BcXmdQrUeiI' height={'140'} width={'100%'} playing loop muted />
									<figcaption className="figure-caption">After</figcaption>
								</figure>
							</div>
							<CardTitle className="mb-4"><b>Instructions</b></CardTitle>
							<CardSubtitle className="font-weight-bold">Step 1: Before you start </CardSubtitle>
							<CardText className="mb-4">You must <b> begin this task from the start of the video</b> and annotate one cell at a time. You can also adjust the speed of the video by clicking the "x1" button located below the cell video. </CardText>
							<CardSubtitle className="font-weight-bold">Step 2: <b className="text-uppercase text-danger"> Add </b> a new bounding box </CardSubtitle>
							<CardText className="mb-4 d-flex align-items-center">Click the  <Button disabled style={{ opacity: 1 }} color="primary" className="d-flex align-items-center instruc-button"><MdAdd /> Add a New Box</Button> button to draw a new bounding box around a cell. Then, drag and resize the box to bound that cell.</CardText>
							<CardSubtitle className="font-weight-bold">Step 3: Track and bound <b className="text-uppercase text-danger">ONLY</b> the cell that you chose</CardSubtitle>
							<CardText className="mb-4">Press the play button, and when the cell moves, pause the video. Then, drag and resize the box to ensure the cell is bounded <b className="text-uppercase text-danger">precisely</b>. Continue this process till the <b>end of the video</b>. <b>Note</b>: The tool will automatically fill the annotations in the missing frames between the intervals you annotated. You must replay the video to verify that the automated annotation is accurate -- if not, pause the video and adjust the box to correct the annotation.</CardText>
							<CardSubtitle className="font-weight-bold"> Step 4a: <b className="text-uppercase text-danger"> Split </b> the bounding box (if applicable)</CardSubtitle>
							<div className="d-flex align-items-center" style={{ marginBottom: 5 }}>If the cell splits into two cells, use the <Button disabled style={{ opacity: 1 }} outline className="d-flex align-items-center instruc-button"><MdCallSplit /> Split</Button> button to split the parent bounding box into two children boxes and adjust the new boxes to fit the new cells.</div>
							<div className="mb-2 d-flex align-items-center">

								<figure className="figure">
									<ReactPlayer url='https://youtu.be/HEBr3O9Z47I' height={'120'} width={'100%'} playing loop muted />
									<figcaption className="figure-caption">Before</figcaption>
								</figure>
								<MdArrowForward style={{ margin: "0px 10px 30px 10px" }} />
								<figure className="figure">
									<ReactPlayer url='https://youtu.be/9EDQdesolq0' height={'120'} width={'100%'} playing loop muted />
									<figcaption className="figure-caption">After</figcaption>
								</figure>
							</div>
							<CardSubtitle className="font-weight-bold">Step 4b: <b className="text-uppercase text-danger"> Hide </b> the bounding box if the cell leaves the video frame or is obscured (if applicable)</CardSubtitle>
							<div className="d-flex align-items-center" style={{ marginBottom: 5 }}>If the cell leaves the video frame or is obscured by other objects, use the <Button disabled style={{ opacity: 1 }} outline className="d-flex align-items-center instruc-button"><IoMdEyeOff /> Hide </Button> button to hide its box. </div>
							<div className="mb-2 d-flex align-items-center">
								<figure className="figure">
									<ReactPlayer url='https://youtu.be/YxilHqkKrfc' height={'120'} width={'100%'} playing loop muted />
									<figcaption className="figure-caption">Before</figcaption>
								</figure>
								<MdArrowForward style={{ margin: "0px 10px 30px 10px" }} />
								<figure className="figure">
									<ReactPlayer url='https://youtu.be/0eclcrDoJTw' height={'120'} width={'100%'} playing loop muted />
									<figcaption className="figure-caption">After</figcaption>
								</figure>
							</div>
							<CardSubtitle className="font-weight-bold">Step 5: Submit the task</CardSubtitle>
							<CardText className="align-items-center mb-5">After you have annotated the cell in the entire video, replay the entire video to check your work. If the annotations are not correct, pause the video, and adjust the boxes. Repeat this process until all cells in the video are annotated. Once you ensure that the annotations are correct, click the <Button disabled style={{ opacity: 1 }} className="align-items-center instruc-button" >Submit</Button> button to submit the results. Click on the <Button disabled style={{ opacity: 1 }} className="align-items-center instruc-button" > Download the annotations </Button> button to save the results. </CardText>  <CardText className="mb-5"> <b>Note</b>: You can delete and redo the annotation or go back and forth in the video as many times as you like to ensure the cell is correctly annotated from the start to the end of the video.</CardText>



							<CardTitle><b>Demo of the Tool</b></CardTitle>
							<div className="d-flex align-items-center" style={{ marginBottom: 10 }}>Here is a short demo of the task:</div>
							<div className="mb-3">

								<ReactPlayer url='https://youtu.be/Wv-mCWM-KIw' height={'400px'} width={'800px'} controls muted />

							</div>



							<CardTitle className="pt-10"><b>Other Buttons:</b></CardTitle>
							<dl className="row">
								<dt className="col-sm-2 text-right"><ButtonGroup><Button disabled style={{ opacity: 1 }} outline className="d-flex align-items-center"><MdUndo /></Button><Button disabled style={{ opacity: 1 }} outline className="d-flex align-items-center"><MdRedo /></Button></ButtonGroup></dt>
								<dd className="col-sm-10 d-flex align-items-center" style={{ marginBottom: 0 }}>can be used to redo and undo the changes.</dd>
								<dt className="col-sm-2 text-right"><Button disabled style={{ opacity: 1 }} outline className="instruc-delete-button"><MdDelete /></Button></dt>
								<dd className="col-sm-10 d-flex align-items-center" style={{ marginBottom: 0 }}>can be used to delete a bounding box or a trajectory (tracking annotation).</dd>
								<dt className="col-sm-2 text-right">Resizing & Tracking history <FaChevronDown /></dt>
								<dd className="col-sm-10 d-flex align-items-center" style={{ marginBottom: 0 }}> can be used to track your annotations.</dd>
							</dl>
						</CardBody>
					</Card>
				</Collapse>
				<Button block color="secondary" style={this.styles} onClick={this.toggle}>{this.state.collapse ? "Hide" : "Show"} Instructions</Button>
			</div>
		)
	}
}

export default Instructions;