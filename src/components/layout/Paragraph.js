import PropTypes from "prop-types";

export default function Paragraph(props) {
	return <p>{props.children}</p>;
}

Paragraph.propTypes = {
	subTitle: PropTypes.string,
};
