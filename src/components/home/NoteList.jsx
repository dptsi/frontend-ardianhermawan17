import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import NoteItem from './NoteItem';
import Jumbotron from '../base/Jumbotron';
import NullNote from '../base/NullNote';

function NoteList({ notes }) {
	const { t } = useTranslation();
	function renderNote() {
		if (notes.length === 0) {
			return <NullNote />;
		}
		return notes.map((note, index) => (
			<NoteItem
				key={note.id}
				id={note.id}
				title={note.title}
				img={`https://picsum.photos/id/${index}/200/300`}
				body={note.body}
				createdAt={note.createdAt}
			/>
		));
	}
	return (
		<section className='mt-12 mx-auto px-4 max-w-screen-xl lg:px-8'>
			<Jumbotron
				title={t('Daftar Notes')}
				description={t('semoga bintang 5')}
			/>
			<div className='mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
				{renderNote()}
			</div>
		</section>
	);
}

NoteList.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
