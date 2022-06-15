import React from "react";
// Bootstrap components
import { Alert, Row, Col } from "react-bootstrap";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Row className="d-flex mt-5 justify-content-center">
            <Col xs={6} >
              <Alert variant="danger">
                <Alert.Heading>Something went wrong</Alert.Heading>
                <hr />
                <p>
                  Ut nostrud aute consequat commodo aliqua eiusmod ullamco anim.
                  Est incididunt occaecat sit enim. Qui amet magna laboris esse
                  et ullamco Lorem culpa ad est ad eiusmod laborum.
                </p>
              </Alert>
            </Col>
          </Row>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
