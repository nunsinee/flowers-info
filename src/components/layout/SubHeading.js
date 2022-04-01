import PropTypes from "prop-types";

export default function SubHeading({ subTitle }) {
	return <h2>{subTitle}</h2>;
}

SubHeading.propTypes = {
	subTitle: PropTypes.string,
};
