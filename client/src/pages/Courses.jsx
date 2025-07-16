import React, { useEffect, useState } from 'react';
import { getCourses } from '../api';

export default function Courses({ token, onLogout }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      setError('');
      try {
        const res = await getCourses(token);
        setCourses(res);
      } catch (err) {
        setError('Failed to load courses. Please try again later.');
      }
      setLoading(false);
    }
    fetchCourses();
  }, [token]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Choose a Course</h2>
      {loading ? (
        <div className="text-gray-500">Loading courses...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul className="space-y-2">
          {courses.length === 0 && <li className="text-gray-500">Courses will be available soon. Just have some patience.</li>}
          {courses.map(course => (
            <li key={course._id} className="p-3 border rounded bg-gray-50">
              <div className="font-semibold">{course.title}</div>
              {course.description && <div className="text-gray-600 text-sm">{course.description}</div>}
            </li>
          ))}
        </ul>
      )}
      <button className="w-full bg-gray-300 text-gray-700 py-2 rounded mt-4" onClick={onLogout}>Logout</button>
    </div>
  );
}
