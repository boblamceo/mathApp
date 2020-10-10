import React from 'react';
import Question from '../components/questions';

export default function addQuestions({ route }) {
    return <Question route={route} operation="-" />;
}
