import { saveJob } from '../lib/saveJob';

export default function JobCard({ job }: { job: any }) {
  const handleSave = async () => {
    try {
      await saveJob(job);
      alert('Job saved!');
    } catch (error) {
      alert('Failed to save job.');
      console.error(error);
    }
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{job.job_title}</h2>
      <p className="text-gray-600">{job.company_name}</p>
      <p className="text-sm">{job.job_city}, {job.job_country}</p>
      <div className="flex justify-between items-center mt-4">
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Apply Now
        </a>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Save Job
        </button>
      </div>
    </div>
  );
}