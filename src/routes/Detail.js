import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
	const id = useParams().id;
	const toDo = toDos.find(toDo => toDo.id === parseInt(id));
	return (
		<>
			<h1>{toDo?.text}</h1>
			Created at: {toDo?.id}
		</>
	);
}

function mapStateToProps(state, ownProps) {
	return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
