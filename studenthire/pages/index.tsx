import { useState } from 'react';
import { fetchJobs } from '../lib/fetchJobs';
import JobCard from '../components/JobCard';

export default function Home() {
  const [query, setQuery] = useState('student');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);

  const searchJobs = async () => {
    const results = await fetchJobs(query, location);
    setJobs(results);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Find Student Jobs</h1>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Job Title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={searchJobs}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div className="grid gap-4">
        {jobs.map((job: any, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </main>
  );
}