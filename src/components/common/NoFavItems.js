import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

export default function NoFavItems({ children }) {
	return <Alert variant="warning">{children}</Alert>;
}
NoFavItems.propTypes = {
	children: PropTypes.string.isRequired,
};
