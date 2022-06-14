import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false,error:null };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true ,error};
    }
  
  
    render() {
      if (this.state.hasError) {
        
        return <h1>Something went wrong </h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;
