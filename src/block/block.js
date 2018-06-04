const { registerBlockType, RichText, MediaUpload, PlainText } = wp.blocks;
const { Button } = wp.components;

import './style.scss';
import './editor.scss';

registerBlockType('card-block/main', {
	title: 'Card',
	icon: 'heart',
	category: 'common',
	attributes: {
		title: {
			source: 'text',
			selector: '.card-header'
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.card-body'
		}
	},
	edit({ attributes, className, setAttributes }) {
		return (
			<div className="container">
				<PlainText
					onChange={content => setAttributes({ title: content })}
					value={attributes.title}
					placeholder="Your card title"
					className="heading"
				/>
				<RichText
					onChange={content => setAttributes({ body: content })}
					value={attributes.body}
					multiline="p"
					placeholder="Your card text"
				/>
			</div>
		);
	},
	save({ attributes }) {
		const cardImage = (src, alt) => {};

		return (
			<div className="card">
				<div className="card-header">{attributes.title}</div>
				<div className="card-body">{attributes.body}</div>
			</div>
		);
	}
});
