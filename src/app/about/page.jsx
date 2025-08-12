import AboutNestedRoute from '@/Components/AboutNestedRoute';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of our Next.js application.</p>
            <AboutNestedRoute></AboutNestedRoute>
        </div>
    );
};

export default AboutPage;