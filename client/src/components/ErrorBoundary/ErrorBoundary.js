import React, { Component } from 'react';
import {Navigate} from 'react-router-dom'
import image from '../../assets/error.jpg'
import './ErrorBoundary.css'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
        return info;
	}

	render() {
		if (this.state.hasError) {
			return (
            <div className="error">
                <img src={image} alt="" />
                <h1>Oops! Something went wrong.</h1>
                <p>Refresh the site and keep going like nothing happened.</p>
                <Navigate to="/"/>
            </div>
            )
		}
		return this.props.children
	}
}

export default ErrorBoundary